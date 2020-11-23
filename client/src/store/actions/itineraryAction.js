import { GET_ITINERARIES } from "./type"

export const getItineraries=(id)=>dispatch=>{
    console.log(id)
    console.log("getItineraries")
    fetch(`http://localhost:5000/itineraries/${id}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        dispatch({
            type:GET_ITINERARIES, 
            payload:res
        })
    })

}