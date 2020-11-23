const express = require("express")

const router = express.Router()

const activityModel = require("../model/activityModel")




router.get("/all",

(req,res)=>{

    activityModel.find({})

    .then(files=>{
        res.send(files)
    })

    .catch(err=>console.log(err));


});


router.post("/:id",(req,res)=>{

    const newActivity = new activityModel({
        title:req.body.title,
        itinerary_id:req.params.id,
        img:req.body.img
    })

    newActivity.save()
    .then(activity=>{
        res.send(activity)
    })

    .catch(err=>{
        console.log(err.message)
        res.status(500).send("server error")
    })

});

router.get("/:itinerary_id",

(req,res)=>{

    let itineraryRequested = req.params.itinerary_id;
    activityModel.find({itinerary_id:itineraryRequested})
    .then(itinerary=>{
        res.send(itinerary)
    })

    .catch(err=>console.log(err));

});
module.exports=router




