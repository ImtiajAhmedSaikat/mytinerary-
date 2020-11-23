import {GET_ACTIVITIES} from "./type"

export const getActivities = (id)=>dispatch=>{
    console.log(id)
    //console.log(getActivities)
    fetch(`http://localhost:5000/activities/${id}`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        dispatch({
            type:GET_ACTIVITIES, 
            payload:res
        })
    })

}
