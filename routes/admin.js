const express=require('express');
const router=express.Router();
const adminController=require('../controllers/adminController');

// router.use('/admin',require('./admin'))
router.use('/editEmp',adminController.editEmp);
// router.use('/delete',employeeController.delete);
// router.use('/',employeeController.admin);

module.exports=router;