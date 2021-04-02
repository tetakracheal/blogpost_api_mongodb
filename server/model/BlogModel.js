// class Userdata1{
//     constructor(blogid,title,content,timestamp,Userid){
//         this.blogid=blogid,
//         this.title=title,
//         this.content=content,
//         this.timestamps=this.timestamps,
//         this.Userid=Userid
//     }
// }
// export default Userdata1;



import mongoose from "mongoose";
const blogSchema= new mongoose.Schema({
title:{type:String, required:[true,"title is required"]},
content:{ type:String,
    required:[true,"content is required "]
},
Userid: {
type:mongoose.Schema.ObjectId,
ref:"user",
required:[true,"User is required"]
},

timestamp:{
    type:String,
     default:new Date(Date.now())
}
});
blogSchema.pre(/^find/,function(next){
    this.populate({
        path:"Userid",
        select:"firstname email"
    })
    next();
});

const blogInfo= mongoose.model("blogdata",blogSchema);
export default blogInfo;




