const express = require('express');
require("dotenv").config()
const{connection}=require("./configs/db")
const{AdminRoute}=require("./routes/Admin.route");
const { AirFreshnerRoute } = require('./routes/AirFreshner.route');
const { BodyCareRoute } = require('./routes/BodyCare.route');
const { CandleRoute } = require('./routes/Candle.Route');
const { HandShopRoute } = require('./routes/HandShop.route');
const{UserRoute}=require("./routes/user.route")

const cors = require('cors');
const { cartRoute } = require('./routes/cart.route');





const app=express()
app.use(cors())
app.use(express.json())

 app.use("/admin",AdminRoute)
// //app.use(authenticate)
app.use("/user",UserRoute)

app.use("/bodycare",BodyCareRoute)
app.use("/candle",CandleRoute)
app.use("/airfreshner",AirFreshnerRoute)
app.use("/cart",cartRoute)
app.use("/handshop",HandShopRoute)



app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`server is running at ${process.env.port}`);
})