import { GET_CITIES,ONE_CITY } from "./type"
import axios from "axios"

export const getCities=()=>dispatch=>{
    
    fetch("http://localhost:5000/cities/all")
    .then(res=>res.json())
    .then(res=>{
        dispatch({
            type:GET_CITIES, 
            payload:res
        })
    })

}
export const getOneCity=(id)=>dispatch=>{
        axios.get(`http://localhost:5000/cities/${id}`)
        .then(res=>{
            dispatch({
                type:ONE_CITY,
                payload:res.data
            })
        })
}
