const app = require("express")();
const mongoose = require("mongoose");
const { connectDatabase } = require("./database/database");


connectDatabase();


app.get("/",(req,res)=>{
    res.json({
        status:200,
        message: "success"
    })
})

app.listen(2000,()=>{
    
console.log("Node JS has started at port 3000")
})