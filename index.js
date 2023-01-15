const express=require("express");
const {connection}=require("./DATABASE/db.js");
const {registerrouter}=require("./ROUTERS/register.router");
const {userrouter}=require("./ROUTERS/user.router")
const {access}=require("./Middleware/usertokenaccess")
// require("dotenv").config();  
const app=express();
const cors=require('cors')
app.use(cors({origin:true}))
app.use(express.json())
app.use("/register",registerrouter);
app.use(access)
app.use("/users",userrouter);

app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("CONNECTED TO DATABASE✔️");
    }catch(err){
        console.log("ERROR❌",err)
    }
    console.log("SERVER IS RUNING GO HEAD✅")
})


