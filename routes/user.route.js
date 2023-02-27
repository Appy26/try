const express = require('express');
const bcrypt = require('bcrypt');
const{UserModel}=require("../models/user.model")
const jwt=require("jsonwebtoken")


const UserRoute=express.Router()

UserRoute.post("/register",async (req,res)=>{
   const{name,email,pass}=req.body
try {
    const isalready=await UserModel.findOne({email})
    console.log(isalready)
    if(isalready){
        res.send({"msg":"Already registered please login"})
    }
    else
    {
        bcrypt.hash(pass, 5, async (err, hash)=> {
           if(err){
            res.send({"msg":"Please enter valid details"})
           }
           else
           {
            const newuser=new UserModel({name,email,pass:hash})
            newuser.save()
            res.send({"msg":"Successfully Registered"})
           }
        });
    }


} catch (error) {
    res.send({"msg":error.message})
}

})


UserRoute.post("/login",async (req,res)=>{
    const {email,pass}=req.body
    try {
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(pass, user[0].pass, async(err, result)=> {
               if(result===true)
               {
                const token = jwt.sign({ userId: user[0]._id }, 'linked');
                res.send({"msg":"Login Successful","token":token,"Username":user[0].name})
               }
               else
               {
                res.send({"msg":"Enter Correct Password"})
               }
            });
        }
        else
        {
            res.send({"msg":"Enter Correct Email or Register First"})
        }
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={UserRoute}