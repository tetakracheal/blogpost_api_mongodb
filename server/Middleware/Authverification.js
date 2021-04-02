import UserControllers from "../controller/AuthController.js";
import Userdata from "../model/UserModel.js";

import {dataFromToken } from "../helpers/token.js";

export const verifyAuth=( req,res,next)=>{
const token=req.header("x-Auth-token")
if(!token){

    res.status(404).json({
        status:404,
        message:"no token provided"
    });
}
try{
const user =dataFromToken(token).payload;
const data= Userdata.findOne({email:user.email});
if(!data){
    res.status(404).json({

        status:404,
        message : " you are not a user"

    })
    
}
console.log (user);
req.body.Userid= user.id;
 return next();
}

catch(e){

    return res.status(404).json({
        status:404,
        message:"invalid token"

    })

}
}