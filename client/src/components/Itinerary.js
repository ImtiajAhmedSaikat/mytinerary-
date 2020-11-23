import React, { Component } from 'react'
import {connect} from "react-redux"
import {FaHeart } from 'react-icons/fa'
import {getItineraries} from "../store/actions/itineraryAction"
import {getOneCity} from '../store/actions/cityAction'
import {likeUnlike}from '../store/actions/userAction'
import Comment from './Comment'

 class Itinerary extends Component {
    constructor(props){
        super(props)
        this.state={
            itineraries:[],
            itnId:""
        }
    }
    componentDidMount(){
        this.props.getItineraries(this.props.match.params.itineraryId)
        this.props.getOneCity(this.props.match.params.itineraryId)

        
    }
    handleChange=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    handleLike=(id)=>{
    this.props.likeUnlike(id)
     }
     handleClick=(id)=>{
        this.setState({
            itnId:id
        })
     }
     
    render() {
        console.log(this.state.itnId)
        
       
        return (
            <div>
                <div style={{backgroundImage:`url(${this.props.city.img})`,backgroundSize:"cover",backgroundPosition:"center",height:150,color:"white",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h1>{this.props.city.name}</h1>
                </div>

                {this.props.itineraries.map((itinerary,index)=>{
                    let fav=this.props.favourites.map(el=>el.itineraryId)
                    console.log(fav)
                    let myColor;
                    {fav.includes(itinerary._id)?myColor="red":myColor="grey"}
                    
                    const itnStyle={
                        width:"98%",
                        border:"1px solid grey",
                        height:"1000px",
                        padding:"10px",
                        margin:"10px"

                    }
                    return(

                        <div style={itnStyle}key={index}>
                            <div className="container">
                                <div className="row mb-2">
                                    <div className="col-2">
                                    <img src={itinerary.avater}className="img-circle rounded-circle float-left" height="50px"/>
                                    </div>
                                    <div className="col-8">
                                    <h3 className="text-center">{itinerary.tittle}</h3>
                                    </div>
                                    <div className="col-2" onClick={()=>this.handleLike(itinerary._id)}>

                                    <FaHeart color={myColor}/>
                                   
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-4">
                                        <h5  className="text-center mb-0">{itinerary.rating}</h5>
                                    </div>
                                    <div className="col-4">
                                    
                                         <h5  className="text-center mb-0 ">{itinerary.duration}</h5>
                            
                                    </div>
                                    <div className="col-4">

                                        <h5  className="text-center mb-0">{itinerary.price}</h5>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className="col-12">
                                    {itinerary.hashtags.map(hash=>{return <p style={{marginTop:"0px"}}>{hash}</p>})}
                                    
                                    </div>
                                    
                                   
                                </div>
                                <div className="row"> 
                 <button onClick={()=>this.handleClick(itinerary._id)}>
                     View more
                 </button>
                 <div className="col-12">
                     {this.state.itnId===itinerary._id && <Comment myId={itinerary._id}/>}
                 </div>

                    </div>
                                

                            </div>
                            {/* <div style={{display:"flex",justifyContent:"space-between"}}> 
                            <img src={itinerary.avater}className="img-circle rounded-circle float-left" height="50px"/>
                            <h3  className="text-center">{itinerary.tittle}</h3>
                            <AiOutlineHeart/>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-around"}}> 
                            
                            <h5  className="text-center mb-0">{itinerary.rating}</h5>
                            <h5  className="text-center mb-0 ">{itinerary.duration}</h5>
                            <h5  className="text-center mb-0">{itinerary.price}</h5>
                            
                            </div>
                        {itinerary.hashtags.map(hash=>{return <p style={{marginTop:"0px"}}>{hash}</p>})}
                 */} 
                        </div>
                    )
                })}
                
            </div>
        )
    }
}

const mapStateToProps=state=>({
    itineraries:state.itineraries.items,
    city:state.cities.item,
    favourites:state.user.favourites
 })
 export default connect(mapStateToProps,{getItineraries,getOneCity,likeUnlike})(Itinerary)
