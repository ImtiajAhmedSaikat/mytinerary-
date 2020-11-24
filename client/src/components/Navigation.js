import React, { Component } from 'react'
import {Navbar,Nav,Tooltip,OverlayTrigger,Image} from 'react-bootstrap'

export default class Navigation extends Component {
    renderTooltip = ()=>{
        return <Tooltip >
            <Nav className="flex-column">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Create Account</Nav.Link>
            </Nav>
        </Tooltip>;  
    }

    render() {
        const Example = (props) => ( 
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip()}
            > 
              <Image src="https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg" 
              roundedCircle 
              height={40} 
              width={40} 
              /> 
            
            </OverlayTrigger>
          );
        return (
            <Navbar bg="light" expand="lg">
                      
            <Example/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="cities">Cities</Nav.Link>
                    <Nav.Link href="login">Login</Nav.Link>
                    <Nav.Link href="register">Create Account</Nav.Link>
                    <Nav.Link  href="/">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
