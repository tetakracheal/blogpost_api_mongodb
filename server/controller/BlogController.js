import Userdata1 from "../model/BlogModel.js";
import blogData from "../model/BlogModel.js";

class Usercontroller1 {
    static blogpost = async (req, res) => {
        let {
            title,
            content
        }=req.body
       const data = await Userdata1.create(req.body);

        if(!data){
            return res.status(201).json({
                status: 201,
                message: "blog not created"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "blog is successfully created",
            data: data._doc
        })
    }
    static getAllBlog = async (req, res) => {
        const data = await Userdata1.find();
        return res.status(200).json({
            status: 200,
            message: "this is all blogs",
            data:data
        })
    }
    static getOneBlog = async (req, res) => {
        const blogId = req.params.id;
        const data =await Userdata1.findById(blogId);
        if(!data){
            return res.status(201).json({
                status: 201,
                message: "impossible"
            })
        }
        return res.status(201).json({
            status: 201,
            message: "this is one blog ",
            data
        })
               }
               static deleteOneBlog = async (req, res) => {
                const blogid = req.params.id;
         
            const data = await blogInfo.findByIdAndDelete(blogid);
            if (!data){
return res.status(404).json({
    status:417,
    message:"blog failed to delete"
});
               }
return res.status(200).json({
    status:200,
    message:"deleted successfully",
})
            }
        
        

            
            static upDate =  async (req, res) => {
                const blogid = req.params.id;
        
                let {
                    title,
                    content
                } = req.body;
                const data= await blogData.findById(blogid)
            
                if (!data){

                return res.status(404).json({
                    status:407,
                    message:"blog not found"
                })
            }
           const dataUpdate= await blogData.findById(blogId);
            return res.status(200).json({

            messsage:"blog updated successfully",
            data: dataUpdate
            })
        }
    }
         
export default Usercontroller1;