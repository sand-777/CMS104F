const mongoose = require("mongoose");
exports.connectDatabase = async ()=>{
    // connecting to database
    //jaba samma database sanga connect hudaina wait gar
await mongoose.connect("mongodb+srv://hellouser:hello@cluster0.2bg2jon.mongodb.net/?retryWrites=true&w=majority")
console.log("Database connected successfully")


}