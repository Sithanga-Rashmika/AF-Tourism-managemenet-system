import express from 'express'
import {sellerSignup ,login,tokenRefresh,Signout} from '../Controllers/Seller-controller.js'
import multer from 'multer'

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null , 'Images_multer')
    },
    filename: function(re,file,cb){
        cb(null, Date.now() + '_' + file.originalname);
    },
})
const upload = multer({storage});

router.post('/Signup',upload.single('ProfilePicture'), sellerSignup);
router.post('/Signin',login);
router.post('/Token',tokenRefresh);
router.delete('/Signout',Signout);

export default router