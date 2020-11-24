import React, { Component } from 'react'
import {connect}from "react-redux"
import { Link } from 'react-router-dom'
import {getCities}from "../store/actions/cityAction"

import Navigation from './Navigation'


 class Cities extends Component {
    constructor(props){
        super(props)
        this.state={
            cities:[],
            search:""
        }
    }
    componentDidMount(){
        this.props.getCities()
        const url=this.props.location.search
        if (url!==""){
            let token = url.split("=")[1]
            localStorage.setItem("token",token)

            
            
            console.log(token)
        }

       
    }
    handleChange=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    render() {
       
        
        return (
            <div>
                <Navigation/>
                <form>
  <label>Search city</label>
  <input type="text"  onChange={this.handleChange}/>

  
</form> 
                {this.props.cities.filter(city=>city.name.toLowerCase().startsWith(this.state.search)).map((city,index)=>{
                    
                    
                    const cityStyle={
                        backgroundImage:`url(${city.img})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        width:"98%",
                        height:"150px",
                        borderRadius:"15px",
                        color:"white",
                        textAlign:"center"
                    }
                    return(
                   <Link  to ={`/itineraries/${city._id}`}key={index} style={{textDecoration:"none"}}>
                       <div style={cityStyle}>
                            <h2 >{city.name}</h2>
                            <h6>{city.country}</h6>
                       </div>
                    </Link> 
                    )
                })}
                
            </div>
        )
    }
}
const mapStateToProps=state=>({
   cities:state.cities.items
})
export default connect(mapStateToProps,{getCities})(Cities)