const mongoose =require('mongoose');
const OTPSSchema =new mongoose.Schema({
   email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    }
});

module.exports = Batch = mongoose.model('otp',OTPSSchema);