const mongoose=require('mongoose');
require('dotenv').config();
// mongoose.connect('mongodb://localhost:27017/userData')
mongoose.connect(process.env.MONGO_DB_URL)
const DB=mongoose.connection;

DB.on('error',err=>logError(err));
DB.once('open',()=>{
    console.log("Connected to MongoDB");
})
