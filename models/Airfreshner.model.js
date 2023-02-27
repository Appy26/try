const mongoose = require('mongoose');


const airfresherSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})


const AirFreshnerModel=mongoose.model("Airfreshner",airfresherSchema)


module.exports={AirFreshnerModel}

