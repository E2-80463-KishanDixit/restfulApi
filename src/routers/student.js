const express = require("express");
const Student = require("../models/studensts");
const router = express.Router();

router.post("/students",async(req,res)=>{
    try{
        const user =  new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/students",async (req,res)=>{
    try{
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    }catch(e){
        res.status(400).send(e);
    }
})

// ************* GET INDIVIDUAL STUDENT DATA *********************

router.get("/students/:id", async (req,res)=>{
try{
    const _id = req.params.id;
    
    const studentData = await Student.findById({_id});
    res.status(200).send(studentData);
}catch(e){
    res.status(400).send(e);
}
})

router.get("/students/:name", async (req,res)=>{
    try{
        const name = req.params.name;
        
        const studentData = await Student.findOne({name});
        res.status(200).send(studentData);
    }catch(e){
        res.status(500).send(e);
        console.log(e);
    }
    })

//*************** UPDATE THE STUDENTS DATA USING ITS ID ***********************

router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudenstData = await Student.findByIdAndUpdate(_id, req.body,{new:true});
        res.status(200).send(updateStudenstData);
    }catch(e){
        res.status(304).send(e);
    }
})

//*************   DELETE STUDENT DATA  USING ITS ID ************************** 

router.delete("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteStudentData = await Student.findByIdAndDelete({_id});
        if(!_id){
            return res.status(400).send("Id not found");
        }
        res.status(200).send(deleteStudentData);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;