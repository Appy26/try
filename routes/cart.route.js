const express = require('express');
const { cartModel } = require('../models/cart.model');




const cartRoute=express.Router()


cartRoute.get("/",async(req,res)=>{
    try {
        const bc=await cartModel.find()
    res.send({"data":bc})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

cartRoute.post("/addcart",async (req,res)=>{
    try {
       const cart=new cartModel(req.body) 
       cart.save()
       res.send({"msg":"Added TO Cart"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

cartRoute.delete("/delete/:id",async (req,res)=>{
    const Id=req.params.id;
    try {
        await cartModel.findByIdAndRemove({_id:Id})
        res.send({"msg":"Successfully Deleted"})
    } catch (err) {
        
    }
})

cartRoute.delete("/checkout",async (req,res)=>{
    await cartModel.deleteMany({})
    res.send({"msg":"Successfully Placed Order"})
})

module.exports={cartRoute}