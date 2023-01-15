const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    "BookName":String,
    "Author":String ,
    "YearofPublish":Number,
    "Price": Number,
    "userID":String
})

const usersmodel=mongoose.model("users",userschema);

module.exports={usersmodel};