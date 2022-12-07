const express=require('express');
const router=express.Router();
const adminController=require('../controllers/adminController');

router.use('/editEmp',adminController.editEmp);
router.use('/edit',adminController.edit);
router.use('/editmemData',adminController.editmemData);
router.use('/resetPassword',adminController.resetPassword);


module.exports=router;