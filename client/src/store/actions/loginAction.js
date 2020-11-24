import {LOGIN_USER,LOAD_USER } from "./type"
import axios from 'axios'
import jwtDecode from "jwt-decode"

export const loadUser=()=>dispatch=>{
    if(localStorage.token){
        const decoded=jwtDecode(localStorage.token)
       dispatch({
           type:LOAD_USER,
           payload:decoded
       })

    }
}



export const loginUser=(body)=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    
    const url = "http://localhost:5000/auth/login"
    axios.post(url,body,config).then(res=>{
        dispatch({
           type:LOGIN_USER, 
             payload:res.data
         })
        console.log(res)
        dispatch(loadUser())


    })
    .catch(err=>console.log(err.message))
}