const mongoose=require("mongoose");
const registerschema=mongoose.Schema({
    "Name":String,
    "Email":String ,
    "Password":String,
    "Dateofbirth": Number
})

const registermodel=mongoose.model("registerusers",registerschema);

module.exports={registermodel};