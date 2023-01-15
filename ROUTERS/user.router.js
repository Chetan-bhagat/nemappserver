const {usersmodel}=require("../MODELS/user.model");
const express=require("express");
const app=express()
var jwt = require('jsonwebtoken');
const userrouter=express.Router();
app.use(express.json())


// *****************ALL NOTES****************
userrouter.get("/",async(req,res)=>{
    try{ 
        const alluser= await usersmodel.find();;
        console.log("ALL THE BOOKS IS AS FOLLOWES");
        res.send(alluser)

    }catch(err){
        console.log("ERROR IN GET IN USERS_ROUT",err)
    }
})

//******************** ADD NOTES *******************
userrouter.post("/create",async(req,res)=>{
    const payload=req.body;
    try{ 
      const data=await new usersmodel(payload);
      await data.save();
      const alluser= await usersmodel.find();;
      res.send(alluser)
    }catch(err){
        console.log("ERROR",err)
    }
})
userrouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const token=req.headers.token
    const ID=req.params.id;
    var decoded = jwt.verify(token, 'masai');
    try{ 
      const data=await  usersmodel.find({"_id":ID});
      const body_userid=data[0].userID;
      const object_userid=decoded.ID;
      console.log(body_userid,object_userid)
      if(body_userid==object_userid){
        const data=await  usersmodel.findByIdAndUpdate({"_id":ID},payload);
        const alluser= await usersmodel.find();
        res.send(alluser)
      }else{
        res.send("U ARE NOT VALID USER")
      }
     
    }catch(err){
        console.log("ERROR",err)
    }
})
userrouter.delete("/delete/:id",async(req,res)=>{
    const token=req.headers.token
    const ID=req.params.id;
    var decoded = jwt.verify(token, 'masai');
    try{ 
      const data=await  usersmodel.find({"_id":ID});
      const body_userid=data[0].userID;
      const object_userid=decoded.ID;
      console.log(body_userid,object_userid)
      if(body_userid==object_userid){
        const data=await  usersmodel.findByIdAndDelete({"_id":ID});
        const alluser= await usersmodel.find();
        res.send(alluser)
      }else{
        res.send("U ARE NOT VALID USER")
      }
     
    }catch(err){
        console.log("ERROR",err)
    }
})


module.exports={userrouter}