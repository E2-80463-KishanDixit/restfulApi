const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name :{
        type:String,
        required : true,
        minlength:3,
        maxlength:30
    },
    email:{
        type: String,
        required:true,
        unique:[true,"Email Id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true
    },
    address:{
        type:String,
        required:true,
    }
});

// ************* NOW WE CREATE A NEW COLLECTION *****************

const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;