const mongoose = require('mongoose');


const CandleSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})


const CandleModel=mongoose.model("Candle",CandleSchema)


module.exports={CandleModel}

