const express = require('express')

const router = express.Router()

const itineraryModel = require('../model/itineraryModel')









router.get('/all',

    (req, res) => {

        itineraryModel.find({})

            .then(files => {

                res.send(files)

            })

            .catch(err => console.log(err));

    });
router.post('/:id', (req, res) => {

        const newitinerary = new itineraryModel({
    
            tittle: req.body.tittle,
    
            city_id: req.params.id,

            avater:req.body.avater,

            rating:req.body.rating,

            duration:req.body.duration,

            price:req.body.price,

            hashtags:req.body.hashtags


    
        })
    
        newitinerary.save()
    
          .then(itinerary => {
    
          res.send(itinerary)
    
          })
    
          .catch(err => {

        console.log(err.message)
    
          res.status(500).send("Server error")}) 
    
    });
    router.get('/:city_id',

(req, res) => {

  let cityRequested = req.params.city_id;

  itineraryModel.find({ city_id: cityRequested })

.then(city => {

res.send(city)

})

.catch(err => console.log(err));

});
module.exports=router

