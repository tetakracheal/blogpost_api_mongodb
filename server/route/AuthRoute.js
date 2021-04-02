import express from 'express'
import Usercontroller from '../controller/AuthController.js';
import validator from "../Middleware/validator.js";

const Router = express.Router();
Router.post('/Auth/signup',validator.newAccountRule(),validator.validateInput,Usercontroller.Usercontroller.signup);
Router.post('/Auth/signin',validator.newRules(),validator.validateInput,Usercontroller.Usercontroller.signin);
export default Router;