//require('dotenv').config({path:"./env"});
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path:"../.env"
});
connectDB().then(()=>{
    app.listen(process.env.PORT||8000);
    console.log(`server is listening on port:${process.env.PORT}`);
}).catch((err)=>{
    console.log("MONGODB connection failed !!!",err);
});

// import express from "express";
// const app=express();

// (async()=>{
// try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error",(error)=>{
//     console.log("Error:",error)
//     throw error
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on Port ${process.env.PORT}`);
// })
// }catch(error){
//     console.log("Error:",Error);
//     throw Error
// }
// })()