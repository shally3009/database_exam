const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
    Name:{
        type:String, 
        required:true
     },
    Location: {
        type:String, 
        required:true
    },
    Menuitems : {
        type:String,
        required:true
    },
    Dishname : {
        type:String,
        required:true
    },
    cost: {
        type:String,
        required:true,
        default: Data.new
    }
});
module.exports = mongoose.Schema('resturant',resturantSchema);