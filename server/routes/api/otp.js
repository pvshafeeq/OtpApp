const express = require('express');
const router = express.Router();
const nodeMailer = require("nodemailer");

const OTP = require('../../models/OTPS');

router.post("/saveotp", async (req, res) => {
    console.log(req.body);
    let data = new OTP({
        email: req.body.email,
        otp: req.body.otp
    });
    console.log(data);
    await data.save();

    res.json({ "status": "success", "data": data });
});

router.post('/validate', async (req, resp) => {
    try
    {
        const data = await OTP.findOne({ email: req.body.email, otp: req.body.otp });
        if (data) {
            resp.send(true);
        }
        else {
            resp.send(false);
        }
    }
    catch(error) {
        resp.status(500).json({message:error.message})
    }
});

router.post("/sendemail", async (req, res) => {
    console.log(req.body);
    const { email } = req.body.email;
    const { otp } = req.body.otp;

    var transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pvshafeeq@gmail.com',
          pass: 'yaypaevfhqxunnih'
        }
      });


    var mailOptions = {
        from: 'pvshafeeq@gmail.com',
        to: req.body.email,
        subject: 'Your OTP',
        text: 'Dear user, Your OTP is : '+req.body.otp
      };

    let info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

    res.send("Email sent successfully !");

})

router.post('/getotp', async (req, resp) => {
    try
    {
        var digits = '1234567890';
        var otp = ''
        for (i = 0; i < 4; i++) {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        resp.send(otp);
    }
    catch(error) {
        resp.status(500).json({message:error.message})
    }
});


module.exports = router;