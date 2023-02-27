const express = require('express');
const { CandleModel } = require('../models/Candle.model');



const CandleRoute=express.Router()


CandleRoute.get("/",async(req,res)=>{
    try {
        const bc=await CandleModel.find()
    res.send({"data":bc})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={CandleRoute}