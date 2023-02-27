const express = require('express');
const { BodycareModel } = require('../models/Bodycare.model');


const BodyCareRoute=express.Router()


BodyCareRoute.get("/",async(req,res)=>{
    try {
        const bc=await BodycareModel.find()
    res.send({"data":bc})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={BodyCareRoute}