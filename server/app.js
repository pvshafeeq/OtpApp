const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');

const app=express();
const otp =require('./routes/api/otp');

app.use(express.json());
app.use(cors());

// Connect Database
connectDB();
const port =8054;

app.use('/api/otp',otp);
app.listen(port, ()=> console.log(`Server running on port ${port}`));