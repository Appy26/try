const mongoose = require('mongoose');


const bodyCareSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})


const BodycareModel=mongoose.model("BodyCare",bodyCareSchema)


module.exports={BodycareModel}

