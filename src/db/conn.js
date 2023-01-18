const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/students-api",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log(err);
})