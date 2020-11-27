
import axios from 'axios'
import {USER_FAVOURITE,CREATE_USER} from "./type"



export const createUser=(body)=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    console.log("createUser")
    console.log(body)
    const url = "http://localhost:5000/user"
    axios.post(url,body,config).then(res=>{
        dispatch({
            type:CREATE_USER, 
            payload:res
        })
        
 })
    .catch(err=>console.log(err.message))
}

export const likeUnlike =(id)=>dispatch=>{
   
    
  //  axios.post(`http://localhost:5000/user/test/${id}`,config)
  fetch(`http://localhost:5000/user/test/${id}`,{
      method:"POST",
      headers:{Authorization:`bearer ${localStorage.token}`}
      
  })
  .then(res=>res.json())
    .then(res=>{
        console.log(res)
        dispatch({
            type:USER_FAVOURITE,
            payload:res
        })
    
    })
    .catch(err=>console.log(err.message))


}