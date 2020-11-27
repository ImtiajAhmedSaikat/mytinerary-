import React, { Component } from 'react'

import {connect} from "react-redux"

import {getActivities} from "../store/actions/activityAction"
import {Carousel} from 'react-bootstrap'




 class Activity extends Component {
        
    constructor(props){
        super(props)
        this.state={
            activities:[],
            
        }
    }
    componentDidMount(){
        this.props.getActivities(this.props.myId)

        
    }
    


    render() {
        console.log(this.props)
        return (
            <div>
                


                <Carousel>
                {this.props.activities.map((activity,index)=>{
                    console.log(activity)
                    
                    return(
                    <Carousel.Item key={index}>
                        <img
                         src={activity.img}
                         className="d-block w-100"
                         alt={activity.title}
                         height="200"/>
                         <Carousel.Caption>
                               {activity.title}
                         </Carousel.Caption>
                    </Carousel.Item>
                    )
                })}
                </Carousel>   
            </div>
        )
    }
}

const mapStateToProps=state=>({
    activities:state.activities.items
 })
 export default connect(mapStateToProps,{getActivities})(Activity)
