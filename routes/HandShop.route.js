const express = require('express');
const { HandshopModel } = require('../models/Handshop.model');


const HandShopRoute=express.Router()


HandShopRoute.get("/",async(req,res)=>{
    try {
        const bc=await HandshopModel.find()
    res.send({"data":bc})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

module.exports={HandShopRoute}