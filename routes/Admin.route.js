const express = require('express');
const{BodycareModel}=require("../models/Bodycare.model")
const{CandleModel}=require("../models/Candle.model")
const{AirFreshnerModel}=require("../models/Airfreshner.model")
const{HandshopModel}=require("../models/Handshop.model")
const{adminauth}=require("../middleware/admin.auth")
const{VerifyAdmin}=require("../middleware/verify.admin")


const AdminRoute=express.Router()


AdminRoute.post("/bodycare",async (req,res)=>{
    const payload=req.body
try {
    await BodycareModel.insertMany(payload)
    // const bodycare=new BodycareModel(payload)
    //  bodycare.save()
    res.send({"msg":"Added BodyCare Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})

AdminRoute.post("/candle",async (req,res)=>{
    const payload=req.body
    console.log(payload);
try {
    await CandleModel.insertMany(payload)
//     const candle=new CandleModel(payload)
//    candle.save()
    res.send({"msg":"Added Candle Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.post("/airfreshner",async (req,res)=>{
    const payload=req.body
try {
    await AirFreshnerModel.insertMany(payload)
    // const airfreshner=new AirFreshnerModel(payload)
    // airfreshner.save()
    res.send({"msg":"Added Airfreshner Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.post("/handshop",async (req,res)=>{
    const payload=req.body
    console.log(payload);
try {
    await HandshopModel.insertMany(payload)
    // const handshop=new HandshopModel(payload)
    // handshop.save()
    res.send({"msg":"Added HandShop Data"})
} catch (error) {
    res.send({"msg":error.message})
}
})


AdminRoute.post("/login",adminauth,(req,res)=>{
    res.send({"Admintokne":"092003"})
})


module.exports={AdminRoute}