const express = require('express');



const VerifyAdmin=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token=="092003")
    {
        next()
    }
    else
    {
        res.send({"msg":"Wrong Admin Token"})
    }
}

module.exports={VerifyAdmin}