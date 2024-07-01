const mongoose = require('mongoose');

const staffShema = new mongoose.Schema({
    name : { 
        type :String,
         required :true 
        },
    age :{
        type: Number ,
         required :true
        },
    mobileno :{
        type:Number, 
        required:true
    }
})

module.exports = mongoose.model('Staff', staffShema);