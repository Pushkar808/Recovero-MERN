const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/userData')
// mongoose.connect('mongodb+srv://ok:orrF1ddSNHyzmVL5@atlascluster.nsa5syd.mongodb.net/?retryWrites=true&w=majority')
const DB=mongoose.connection;

DB.on('error',err=>logError(err));
DB.once('open',()=>{
    console.log("Connected to MongoDB");
})
