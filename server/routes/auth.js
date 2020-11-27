const express =require("express")
const userModel = require("../model/userModel")
const router=express.Router()
const bcrypt=require("bcrypt")
const key=require("../keys")
const jwt = require("jsonwebtoken")
const passport=require("passport")
const {check,validationResult}=require("express-validator")

router.post("/login",[
  check('email', 'Please include a valid email')
        .isEmail(),
        check('password', 'Password is required').exists()
],async(req,res)=>{
  const errors=validationResult(req)
        if(!errors.isEmpty()){
                return res.status(400).json({
                        errors: errors.array()
                    });
        }
    const{
        email,
        password
    }=req.body
    let user= await userModel.findOne({email})

    if(!user){
        
        return res
                    .status(400)
                    .json({
                        erros: [{
                            msg: 'Invalid Credentials'
                        }]
                    });
    }
    const match=await bcrypt.compare(password,user.password)
    console.log(password)
    if(!match){
        
        return res
                    .status(400)
                    .json({
                        erros: [{
                            msg: 'Invalid Credentials'
                        }]
                    });
    }
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
router.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const user = req.user;         
    const payload = {
      id: user._id,
      name: user.name,
      image: user.image
    };
    
    // sign token
    jwt.sign(
      payload,
      key.secretOrKey,
      {
        expiresIn: 2592000
      },
      (err, token) => {
       

        const myToken = "?code=" + token;
        //console.log("this is myToken " + myToken)
        //res.send(token)
        res.redirect("http://localhost:3000/cities" + myToken);
      }
    );
  });

module.exports=router 
