const jwt = require("jsonwebtoken");
require("dotenv").config();  

const access=async(req,res,next)=>{
    const token=req.headers.token
   try{
    var decoded = jwt.verify(token, process.env.key);
    if(decoded){
        // console.log(decoded,req.body)
        req.body.userID=decoded.ID;
        // console.log(decoded.ID,req.body,req.body.userID)
        next()
    }else{
        res.send("LOGIN FIRST")
    }
   }catch(err){
    res.send("LOGIN FIRST")
   }
}

module.exports={access};