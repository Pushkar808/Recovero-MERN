const express = require('express');
const path = require('path');
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts');//express ejs layouts
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")
const Dbconfig = require('./config/dbconfig')
const passportLocal = require('./config/passport');
const mongoStore = require('connect-mongo');
const passport = require('passport')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const port = process.env.PORT || 8000;//port for server
const app = express();


app.use(cookieParser())
app.use(express.urlencoded())
// app.use(bodyParser.urlencoded({ extended: true }))

//setting template engine
app.set('view engine', 'ejs');
//setting where to find views for ejs
app.set('views', path.join(__dirname, 'views'));
app.use(session({
    name: 'user_id',
    secret: "KEY",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: (1000 * 60 * 100) },
    store: MongoStore.create({
        // mongoUrl: 'mongodb://localhost:27017/userData',
        mongoUrl:"mongodb+srv://practice_user:xD2oFC5W1XFjUIYu@cluster0.qqym1zm.mongodb.net/?retryWrites=true&w=majority",
        autoRemove: 'disabled'
    },
        function (err) {
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}))

app.use(passport.initialize());
app.use(passport.session());
//setting the ejs login var to true is authenticated else false 
app.use(passport.setAuthenticatedUser)//find this on config/pass

app.use(flash());
app.use(
    function (req, res, next) {
        res.locals.flash = {
            'success': req.flash('success'),
            'error': req.flash('error')
        }
        next();
    }
)
//setting up static files so that we can use css and js inside layouts
app.use(express.static('./asset'));
app.use(expressLayouts)
app.set('layout extractStyles', true);
app.set("layout extractScript", true)




//local server

//using routes folder all routes starting from '/'
app.use('/', require('./routes'));

//starting server at port 
app.listen(port, (err) => {
    if (err) {
        console.log("error in connecting to server");
    }
    console.log("Connected to server at port: " + port);
})