const express = require('express');
const { AirFreshnerModel } = require('../models/Airfreshner.model');



const AirFreshnerRoute=express.Router()


AirFreshnerRoute.get("/",async(req,res)=>{
    try {
        const bc=await AirFreshnerModel.find()
    res.send({"data":bc})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={AirFreshnerRoute}