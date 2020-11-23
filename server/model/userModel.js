const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

         name: {
    
            type: String,
    
            required: true
    
           
         },
    
        email: {
    
            type: String,
    
            required: true
    
        },
    googleAuth:{
        type:Boolean

    },

        password:{
            type:String,
            required: function validate() {
                if (this.googleAuth) {
                    return false;
                } else {
                    return true;
                }
            }
        },
    
        image: {
    
            type: String,
    
        },
    favourites:{
        type:Array
    }
    
    })
    

    
    module.exports = mongoose.model('user', userSchema)