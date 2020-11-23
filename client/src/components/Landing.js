import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Landing extends Component {
    render() {
        return (
            <div>
                <header>
                    <img id="firstimage" src="/images/headerlogo.png" alt="error" height="100px" width="100px"/>
                </header>
                <p id="first">
                    Find your perfecttrip,design by
                    insiders who know and love their cities.
                </p>
                <h1>Start browsing</h1><br></br>
                <Link to="/cities">
                <img  src="/images/browsing.png"alt="error" height="50px" width="50px"/>
                </Link>
                
                <br></br>
                <p id="two">Want to build your own Mytinerary?</p>
                <br></br>
                <div id="createaccount">
                <a href="/register">Create Account</a>
                </div>
                <div id="login">
                <a href="/login">Login</a>
                </div>
                <div id="homeicon">
                <a href="/"><img src="/images/homeicon.png"alt="error" height="50px" width="50px"/></a>
                </div>
                
                
                
            </div>
        )
    }
}
