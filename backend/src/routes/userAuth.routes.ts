import express, { Router } from 'express';
import {userSignup,userLogin,verifyOTP} from '../controller/userAuth.controller'

const router=express.Router();

router.post('/signup',userSignup); //http://localhost:5000/api/signup
router.post('/login',userLogin); //http://localhost:5000/api/login
router.post('/verifyotp',verifyOTP); //http://localhost:5000/api/verifyotp

export default router;
