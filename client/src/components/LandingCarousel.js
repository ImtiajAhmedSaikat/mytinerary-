import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCities} from '../store/actions/cityAction'
import {Carousel,} from 'react-bootstrap'

 class LandingCarousel extends Component {
     componentDidMount(){
        this.props.getCities()
     }
    render() {
        const cities=this.props.cities
        console.log(cities[0]?.img)
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <div style={{
                            display:"flex",
                            flexWrap:"wrap",
                            height:"210px",
                            marginLeft:"30px"

                        }}>
                        <img
                        src={cities[0]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[1]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[2]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[3]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150"
                        />
                        </div>
                        
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <div style={{
                            display:"flex",
                            flexWrap:"wrap",
                            height:"210px",
                            marginLeft:"30px"

                        }}>
                        <img
                        src={cities[4]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[5]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[6]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[7]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150"
                        />
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{
                            display:"flex",
                            flexWrap:"wrap",
                            height:"210px",
                            marginLeft:"30px"

                        }}>
                        <img
                        src={cities[8]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[9]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[10]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[11]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150"
                        />
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{
                            display:"flex",
                            flexWrap:"wrap",
                            height:"210px",
                            marginLeft:"30px"

                        }}>
                        <img
                        src={cities[12]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[13]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[14]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150px"
                        />
                        <img
                        src={cities[15]?.img} 
                        className="img-thumbnail"
                        alt=""
                        height="100px"
                        width="150"
                        />
                        </div>
                        
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    cities:state.cities.items
})
export default connect(mapStateToProps,{getCities})(LandingCarousel)
