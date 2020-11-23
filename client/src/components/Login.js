import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../store/actions/loginAction'


 class Login extends Component {
    constructor(props){
        super(props);
        this.state={
          
          email:"",
          pasword:"",
          
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      //console.log("test")

        this.setState({[event.target.name]:event.target.value});
        console.log(this.state)
    }
      
    handleSubmit(event){

        
        event.preventDefault();
        
        
        const email=this.state.email
        const password=this.state.password
        
        const body=JSON.stringify({email,password,})
        this.props.loginUser(body)
        this.props.history.push("/cities")
       


    }


    render() {
        return (
            <div>
                <form onSubmit={()=>this.handleSubmit}>
                
  
  <div class="form-group">
  
    <label for="exampleInputEmail1">Email :</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@gmail.com" value={this.state.email} onChange={this.handleChange}/><br></br>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div><br></br>
  <div class="form-group">
    <label for="exampleInputPassword1">Password:</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
  </div><br></br>
  
  

    
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<a href="http://localhost:5000/auth/google">Google</a>
            </div>
        )
    }
}
export default connect(null,{loginUser})(Login)

