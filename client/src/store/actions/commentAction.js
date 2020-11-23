import {GET_COMMENTS,ADD_COMMENTS,DELETE_COMMENTS,UPDATE_COMMENTS} from "./type"

import axios from "axios"

export const getComments = (id)=>dispatch=>{
    console.log(id)
    //console.log(getActivities)
    axios.get(`http://localhost:5000/comment/${id}`)
    
    .then(res=>{
        console.log(res)
        dispatch({
            type:GET_COMMENTS, 
            payload:res.data
        })
    })

}
export const addComment = (id,text)=>dispatch=>{
    
    const config = {
        headers:{
            Authorization:`bearer ${localStorage.token}`
        }
    }
    const body = {text}
    
   
    axios.post(`http://localhost:5000/comment/${id}`,body,config)
    
    .then(res=>{
        console.log(res)
        dispatch({
            type:ADD_COMMENTS, 
            payload:res.data
        })
    })
    .catch(err=>err.message)

}
export const deleteComment = (id)=>dispatch=>{
    
    const config = {
        headers:{
            Authorization:`bearer ${localStorage.token}`
        }
    }
    
   
    axios.delete(`http://localhost:5000/comment/delete/${id}`,config)
    
    .then(res=>{
        console.log(res)
        dispatch({
            type:DELETE_COMMENTS, 
            payload:res.data
        })
    })
    .catch(err=>err.message)

}

export const updateComment = (id,text)=>dispatch=>{
    
    const config = {
        headers:{
            Authorization:`bearer ${localStorage.token}`
        }
    }
    const body = {text}
    
   
    axios.put(`http://localhost:5000/comment/update/${id}`,body,config)
    
    .then(res=>{
        console.log(res)
        dispatch({
            type:UPDATE_COMMENTS, 
            payload:res.data
        })
    })
    .catch(err=>err.message)
}