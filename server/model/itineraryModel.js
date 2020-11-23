const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({

title: {
    
            type: String,
    
            required: true,
    
            unique: true
    
        },
    
city_id: {
    
            type: String,
    
            required: true
    
         },
    
avater: {
    
            type: String,
    
        },

rating:{
        type:String,
    },
duration:{
        type:String,
    },
 price:{
        type:String,
    },
 hashtags:{
        type:Array,
    }
    
 })
    
    //name of module is the singular version (itinerary) of the database name (cities)
    
    module.exports = mongoose.model('itinerary', itinerarySchema)