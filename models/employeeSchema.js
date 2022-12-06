const mongoose=require('mongoose');
const EmpSchema=mongoose.Schema({//Db structure
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },  
    added_by:{
        type:String,
        // required:true,
        default: 'self'
    },    
    is_admin:{
        type:Boolean
    }
})
const Employee=mongoose.model('Employee',EmpSchema);
module.exports=Employee