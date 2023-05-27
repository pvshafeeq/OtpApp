import React from 'react'
import { Button, Form,Segment, Container } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const GetOTP = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    //const baseUrl="api"; //Prod Url
   const baseUrl="http://localhost:8054/api"; //Local Url

    const generateOTP = () => {
        if(email !== undefined && email !== null && email !=='')
        {
          axios.post(`${baseUrl}/otp/getotp`)
            .then((resp) => {
              if (resp.data !=null) {

                const otpData = {
                    email: email,
                    otp: resp.data
                };

                axios.post(`${baseUrl}/otp/sendemail`, otpData)
                .then((getData) => {
                  if (getData.data) {
                    sessionStorage.setItem("email", otpData.email);
                  }
                }
                )

                axios.post(`${baseUrl}/otp/saveotp`, otpData)
                .then((getData) => {
                  if (getData.data) {
                   
                  }
                }
                )
                navigate('/validate');

              }
              else {
                alert('Invalid Email!')
              }
            }
            )
          }
          else
          {
            alert('Username and Password are required!')
          }
        }

  return (
   
<Container text>
    <br></br>
    <div className="p-3 mb-2 bg-secondary text-white"><b>OTP App </b></div>
    <Segment>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input name='email' placeholder='Email'  onChange={(e) => setEmail(e.target.value)}/>
        </Form.Field>

        <Button color='grey' type='submit' onClick={generateOTP}>Generate OTP</Button>
      </Form>
    </Segment>
  </Container> 
  )
}

export default GetOTP