import express,{Router} from 'express';
import {updateProfile} from '../controller/profile.controller'
import {protect} from '../middleware/auth'

const router=express.Router();

router.post('/updateProfile/:id',protect,updateProfile);

export default router;