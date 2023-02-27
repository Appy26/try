const mongoose = require('mongoose');


const handshopSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    desc:String,
    image:String,
    type:String,
    fragnance:String,
})


const HandshopModel=mongoose.model("Handshop",handshopSchema)


module.exports={HandshopModel}

