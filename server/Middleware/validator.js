import { check, validationResult } from "express-validator";
import blogData from "../model/BlogModel.js";

class validator {

    static verifyAccess= async(req,res,next)=>{

        const UseridFromToken = req.body.Userid;
        const blogIdFromParams = req.params.id;
        const blog= await blogData.findById(blogIdFromParams);

        if (!blog){

            return res.status(404).json({
                status:404,
                message:"blog not exist"

            })
        }
        else if(UseridFromToken==blog.Userid._id){

            return next ()
        }
return res.status(401).json({
    status:401,
    message:"you are not authorised"
})

    }

    static newAccountRule() {
        return [
        check("email", "invalid email").isEmail(),
        check("firstname", "firstname should be valid").isAlpha(),
        check("lastname", "lastname should be valid").isAlpha(),
        check("password", "password must contain 10 characters").isStrongPassword(),
        check("gender", "gender should be male or female").isIn(["male", "female"]),
        check("role", "role  must be an admin or user").isIn(["admin", "user"]),
        check("department", "department must not contain special characters").isAlpha(),
        check("address", "address must not contain special characters ").isAlpha()

        ]

    };
    static newRules(){

        return [ check ("email","invalid email").isEmail(),
        check("password","password must be strong").isStrongPassword(),

    ]
    }
    static blogRules(){

        return [check ("title","title....").isLength( {max:50 })]
    }

    static validateInput = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            const errorMessage = errors.errors.map(e => e.msg);
            return res.status(400).json({
                status: 400,
                error: errorMessage
            })

        }

        return next()


    }

}
export default validator