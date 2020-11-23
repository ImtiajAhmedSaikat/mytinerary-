const express = require('express')
const router = express.Router()
const commentModel = require('../model/commentModel')
const passport = require('passport')
const userModel=require('../model/userModel')



router.get('/:id',async(req,res)=>{
    
    await commentModel.find({itineraryID:req.params.id})
    .then(comments=>res.send(comments))

})

router.post('/:id',passport.authenticate('jwt',{session:false}),async(req,res)=>{
    let user=await userModel.findById(req.user._id)
    let comment=new commentModel({
        text:req.body.text,
        user:user._id,
        userName:user.name,
        avater:user.image,
        itineraryID:req.params.id

    })
    comment.save()
    res.send(comment)
})
router.put('/update/:id',passport.authenticate('jwt',{session:false}),async(req,res)=>{
    let user=await userModel.findById(req.user._id)
    if(!user){
        res.status(404).json({ error: "User does not exist!" })
}
    let comment = await commentModel.findById(req.params.id)
   

    if(comment.user.toString() !== req.user.id){
        
        res.status(401).json({ error: "User not authorized" })
    }
    if(!comment){
        res.status(404).json({ error: "Comment does not exist" })
    } else {
       comment.text = req.body.text
    
    await comment.save()
    res.send(comment)
    }
    
    
    
})
router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),async(req,res)=>{
    let user=await userModel.findById(req.user._id)
    if(!user){
        res.status(404).json({ error: "User does not exist!" })
}
    let comment = await commentModel.findById(req.params.id)
    

    if(comment.user.toString() !== req.user.id){
       
        res.status(401).json({ error: "User not authorized" })
    }
    if(!comment){
        res.status(404).json({ error: "Comment does not exist" })
    } else {
       
    
    await comment.remove()
    res.send("your comment removed")
    }
    
    
    
})
module.exports=router
