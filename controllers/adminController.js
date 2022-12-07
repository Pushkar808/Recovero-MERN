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
        res.render('editEmp', {
            Empdata: Empdata,
            admin_id: req.user.id
        }
        );
    })
}

module.exports.edit = (req, res) => {
    if (!req.isAuthenticated() || !req.user.is_admin) {//if user if not admin or not signed in then unable to show this page
        return res.redirect('/');
    }
    employeeSchema.findById(req.query.id, (err, data) => {
        if (err) {
            console.log("ERROR in View of Emp" + err); return;
        }
        res.render('editForm', {
            Empdata: data
        }
        );
    })

}


module.exports.editmemData = (req, res) => {
    if (!req.isAuthenticated() || !req.user.is_admin) {//if user if not admin or not signed in then unable to show this page
        return res.redirect('/');
    }
    const update = {
        name: req.body.name,
        email: req.body.email,
        is_admin: req.body.isadmin ? true : false,
    }
    console.log(req.query.id)
    employeeSchema.findByIdAndUpdate(req.query.id, update, (err, data) => {
        if (err) {
            console.log("Error in updating emp ref:adminControll.editEmp" + err);
            return;
        }
        return res.redirect('back')
    })
}


module.exports.resetPassword = (req, res) => {
    if (!req.isAuthenticated() || !req.user.is_admin) {//if user if not admin or not signed in then unable to show this page
        return res.redirect('/');
    }
    employeeSchema.findByIdAndUpdate(req.query.id, {password:"123456"}, (err, data) => {
        if (err) {
            console.log("Error in updating emp ref:adminControll.editEmp" + err);
            return;
        }
        return res.redirect('back')
    })
}