const employeeSchema = require('../models/employeeSchema');

//module to view employee
module.exports.editEmp = (req, res) => {
    console.log("OK")
    if (!req.isAuthenticated() || !req.user.is_admin) {//if user if not admin or not signed in then unable to show this page
        return res.redirect('/');
    }
    employeeSchema.find({}, (err, Empdata) => {
        if (err) { 
            console.log("ERROR in View of Emp" + err); return; 
        }
        res.render('editEmp',{
            Empdata:Empdata,
            admin_id:req.user.id
        }
        );
    })
}
