const express = require('express')

const router = express.Router()

const userModel = require('../model/userModel')
const bcrypt=require("bcrypt")
const passport=require("passport")
const itineraryModel = require('../model/itineraryModel')
const jwt = require("jsonwebtoken")
const key=require("../keys")


router.post('/', async (req, res) => {

        const newUser = new userModel({
    
            name: req.body.name,
    
            email:req.body.email,

            password:req.body.password,

            
    

            image:req.body.image
    
        })
    
    const salt = await bcrypt.genSalt(10)
    newUser.password= await bcrypt.hash(newUser.password,salt)
    
        await newUser.save()
    
    
          .then(user => {
        console.log(user)
    
              const payload = {

                            id: user._id,
                
                            username: user.email,
                
                            image: user.image
                
                };
                
                const options = {expiresIn: 2592000};
                
                jwt.sign(
                
                  payload,
                
                  key.secretOrKey,
                
                  options,
                
                  (err, token) => {
                
                    if(err){
                
                      res.json({
                
                        success: false,
                
                        token: "There was an error"
                
                      });
                
                    }else {
                
                      res.json({
                
                        success: true,
                
                        token: token
                
                      });
                
                    }
                
                  }
                
                );
    
    
          })
    
          .catch(err => {
    
          res.status(500).send(err.message)}) 
    
    });
    router.get(

          "/",
        
          passport.authenticate("jwt", { session: false }),
        
          (req, res) => {
        
            userModel
        
              .findOne({ _id: req.user.id })
        
              .then(user => {
        
                res.json(user);
        
              })
        
              .catch(err => res.status(404).json({ error: "User does not exist!" }));
        
          }
        
        );
        router.post("/like/:id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
                let user=await userModel.findById(req.user._id)
                if(!user){
                        res.status(404).json({ error: "User does not exist!" })
                }
                await itineraryModel.findOne({_id:req.params.id})
                .then(itn=>{
                        if(!itn){
                                res.status(404).json({ error: "Itinerary does not exist!" })
                        }
                        let result=user.favourites.filter(el=>el.itineraryId==req.params.id)
                        console.log(result)
                        
                        
                        if(result.length!==0){
        
                                res.status(404).json({ error: "user Already liked this itinerary" })
        
                               
                        }
                        else{
                                user.favourites.push({itineraryId:itn._id, name:itn.title})
                                
                               user.save()
                                res.send(user)
                        }

                })
                

               
        })
        router.post("/test/:id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
                let user=await userModel.findById(req.user._id)
                if(!user){
                        res.status(404).json({ error: "User does not exist!" })
                }
                await itineraryModel.findOne({_id:req.params.id})
                .then(itn=>{
                        if(!itn){
                                res.status(404).json({ error: "Itinerary does not exist!" })
                        }
                        let result=user.favourites.filter(el=>el.itineraryId==req.params.id)
                        
                        
                        
                        if(result.length!==0){
        
                                //res.status(404).json({ error: "user Already liked this itinerary" })
                                let remove=user.favourites.map(el=>el.itineraryId).indexOf(req.params.id)
                                
                                if(remove!==-1){
                                        console.log("splice")
                                        user.favourites.splice(remove,1)
                                        user.save()
                                         return user.favourites        
                                }
        
                               
                        }
                        else{
                                console.log("push")
                                user.favourites.push({itineraryId:itn._id, name:itn.title})
                                
                               user.save()
                               return user.favourites
                        }
                
                })
                .catch(err=>res.status(500).send(err.message))
                await res.send(user.favourites)
                

               
        })
        router.post("/unlike/:id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
                let user=await userModel.findById(req.user._id)
                if(!user){
                        res.status(404).json({ error: "User does not exist!" })
                }
                await itineraryModel.findOne({_id:req.params.id})
                .then(itn=>{
                        if(!itn){
                                res.status(404).json({ error: "Itinerary does not exist!" })
                        }
                        let result=user.favourites.filter(el=>el.itineraryId==req.params.id)
                        
                        
                        
                        if(result.length===0){
        
                                res.status(404).json({ error: "user  did not like this itinerary" })
                                
        
                               
                        }
                        else{

                                let remove=user.favourites.map(el=>el.itineraryId).indexOf(req.params.id)
                                
                                if(remove!==-1){
                                        console.log("splice")
                                        user.favourites.splice(remove,1)
                                        user.save()
                                        res.send(user)        
                                }
                        }

                })
                .catch(err=>res.status(500).send(err.message))
                

               
        })
module.exports=router


