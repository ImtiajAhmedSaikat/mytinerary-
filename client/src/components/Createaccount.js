import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createUser} from '../store/actions/userAction'

 class Createaccount extends Component {
    constructor(props){
        super(props);
        this.state={
          name:"",
          email:"",
          pasword:"",
          image:""
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
        
        const name=this.state.name
        const email=this.state.email
        const password=this.state.password
        const image=this.state.image
        const body=JSON.stringify({name,email,password,image})
        this.props.createUser(body)
        this.props.history.push("/cities")


    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                
  
  <div className="form-group">
  <label className="sr-only" htmlFor="inlineFormInputName2">Name:</label>
  <input type="text" name="name" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" value={this.state.name} onChange={this.handleChange}/><br></br><br></br>
    <label htmlFor="exampleInputEmail1">Email :</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@gmail.com" value={this.state.email} onChange={this.handleChange}/><br></br>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div><br></br>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password:</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
  </div><br></br>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Picture:</label>
    <input type="text" name="image"className="form-control" placeholder="image url" value={this.state.image} onChange={this.handleChange}/>
  </div><br></br>
  
  

    
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}
export default connect(null,{createUser})(Createaccount)

