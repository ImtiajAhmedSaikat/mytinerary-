const express = require('express')

const router = express.Router()

const cityModel = require('../model/cityModel')







/*get all cities*/

router.get('/all',

    (req, res) => {

        cityModel.find({})

            .then(files => {

                res.send(files)

            })

            .catch(err => console.log(err));

    });
router.post('/', (req, res) => {

        const newCity = new cityModel({
    
            name: req.body.name,
            country: req.body.country,
            img: req.body.img
    
        })
    
        newCity.save()
    
          .then(city => {
    
          res.send(city)
    
          })
    
          .catch(err => {
    
          res.status(500).send("Server error")}) 
    
    });
    router.get("/:id",async(req,res)=>{
        let city=await cityModel.findById(req.params.id)
        if(!city){
            res.status(404).json({ error: "no city match the search" })
        }
        res.send(city)
    })
module.exports=router

