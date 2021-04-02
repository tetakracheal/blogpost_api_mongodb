import express from 'express';

import Usercontroller1 from '../controller/BlogController.js';

    import {verifyAuth} from '../Middleware/Authverification.js';
    import validator from "../Middleware/validator.js";
    
const Router = express.Router();
Router.post('/blogpost/create',validator.blogRules(),validator.validateInput,verifyAuth,Usercontroller1.blogpost);
Router.get('/blogpost/all',Usercontroller1.getAllBlog);
Router.get('/blogpost/one/:id',verifyAuth,validator.verifyAccess,Usercontroller1.getOneBlog);
Router.delete('/blogpost/delete/:id',Usercontroller1.deleteOneBlog);
Router.patch('/blogpost/update/:id',Usercontroller1.upDate);
export default Router;
