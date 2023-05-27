import React from 'react'
import { Button, Form,Segment, Container } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const ValidateOTP = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState(sessionStorage.getItem("email"));
    const [otp, setOTP] = useState('');

     //const baseUrl="api"; //Prod Url
   const baseUrl="http://localhost:8054/api"; //Local Url

   const validateOTP = () => {
    if(otp !== undefined && otp !== null && otp !=='')
    {
        const otpData = {
            email: email,
            otp: otp
        };
      axios.post(`${baseUrl}/otp/validate`,otpData)
        .then((resp) => {
          if (resp.data !=null) {
            if (resp.data ==true) {
                navigate('/welcome');
            }
            else {
                alert('Invalid OTP')
              }

           

           
           

          }
          else {
            alert('Invalid OTP')
          }
        }
        )
      }
      else
      {
        alert('Enter OTP')
      }
    }

  return (
    <Container text>
    <br></br>
    <div className="p-3 mb-2 bg-secondary text-white"><b>OTP App </b></div>
    <Segment>
      <Form>

        <Form.Field>
          <label>Enter OTP</label>
          <input name='otp' placeholder='OTP'  onChange={(e) => setOTP(e.target.value)}/>
        </Form.Field>

        <Button color='grey' type='submit' onClick={validateOTP}>Validate</Button>
      </Form>
    </Segment>
  </Container> 
  )
}

export default ValidateOTP