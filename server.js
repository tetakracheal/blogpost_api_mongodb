import express from "express";

import jsonwebtoken from "jsonwebtoken";

import dotenv from "dotenv";

import bodyparse from "body-parser";

import Authroute from './server/route/AuthRoute.js';

import blogpostAuthroute from'./server/route/BlogRoute.js';

import mongoose from  'mongoose'

dotenv.config({path :"./.env"});

const app=express();
app.use(bodyparse.json());
app.use('/api/v1/blogpost',Authroute);
app.use('/api/v1/blogpost',blogpostAuthroute);
app.use('/',(req,res) => {
    res.status(200).send({
        statu:(200),
        message:"this is a blogpost API"
    })
})
const dataBaseUrl = process.env.DATABASE

mongoose.connect (dataBaseUrl,{useNewUrlParser:true,useCreateIndex: true,useUnifiedTopology:true,useFindAndModify:false})
.then ( ()=> {console.log("database connected successfully")})

const port = process.env.PORT;
//app.listen(6060)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
export default app;