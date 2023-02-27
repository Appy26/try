const express = require('express');


const adminauth=(req,res,next)=>{
    const{email,password}=req.body
    try {
      if(email==="aparnaharsh2604@gmail.com" && password==="aparna2604")
      {
        next()
      }
      else{
        res.send({"msg":"Un Authorized Admin"})
      }
    } catch (error) {
        
    }
}

module.exports={adminauth}