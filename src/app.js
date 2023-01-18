// const { response } = require("express");
const express = require("express");
require("./db/conn");
const studentRouter = require('./routers/student');
const port = process.env.PORT || 3000;;

const app =  express();

// app.get("/",(req,res)=>{
//     res.send("You are at Home page. Welcome Kishan");
// })

app.use(express.json());

app.use(studentRouter);

//***********   CREATE A NEW STUDENT ****************//


// app.post("/students",(req,res)=>{
//     console.log(req.body);

//     const user =  new Student(req.body);

//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })

//     // res.send("hello from the other side by kishan");
// });

//1. ************** CREATE A NEW ROUTER ******************

//2. ********** NOW WE  NEED TO DEFINE ROUTER **********************

//3. ************* WE NEED TO REGISTER ROUTER ****************



app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})
