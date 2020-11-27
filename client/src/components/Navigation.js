import React, { Component } from 'react'
import {Navbar,Nav,Tooltip,OverlayTrigger,Image} from 'react-bootstrap'
import {connect}from "react-redux"
import {logOut}from "../store/actions/loginAction"

 class Navigation extends Component {
    renderTooltip = ()=>{
        return <Tooltip >
            <Nav className="flex-column">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Create Account</Nav.Link>
            </Nav>
        </Tooltip>;  
    }

    render() {
        const Example = (props) =>{
            let image;
            if(this.props.user.length===0){
                image = <Image src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg" 
                roundedCircle 
                height={40} 
                width={40} 
                /> 
                
            }
            else{
                image = <Image src={this.props.user?.image}
                roundedCircle 
                height={40} 
                width={40} 
                /> 
            }
            return(
                <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip()}
            > 
            
             {image} 
            
            </OverlayTrigger>
            )
            
          };
          let login  = <Nav.Link href="login">Login</Nav.Link>
          let logout = <Nav.Link onClick={()=>this.props.logOut()}  href="/">Logout</Nav.Link>
          console.log(this.props.user)
        return (
            <Navbar bg="light" expand="lg">
                      
            <Example/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="cities">Cities</Nav.Link>
                    <Nav.Link href="register">Create Account</Nav.Link>
                {this.props.user.length===0 ? login:logout}
                    
                    
                    
                    
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
const mapStateToProps=state=>({
    user:state.user.user
})
export default connect(mapStateToProps,{logOut})(Navigation)
