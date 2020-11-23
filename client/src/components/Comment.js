import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getComments,addComment,updateComment,deleteComment} from '../store/actions/commentAction'
import {BiCaretRight} from 'react-icons/bi'
import {Form,Button,Modal} from 'react-bootstrap'
import {BsTrash,BsPencil} from 'react-icons/bs'
import dateformat from 'dateformat'





 class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"",
            modal:false,

        
             }
             this.toggle=this.toggle.bind(this)
        }
        componentDidMount(){
            this.props.getComments(this.props.myId)
     
             }
             handleChange=(e)=>{
                this.setState({
                    text:e.target.value
                })
             }
             onClick=()=>{
                 console.log("test")
             }

             handlSubmit=(e)=>{

                e.preventDefault()
                console.log(e.target)
               if(!localStorage.token){
                   this.props.history.push("/login")
               }
               else{
                   this.props.addComment(e.target.id,this.state.text)
               }
                
                 }
                 updateComment=()=>{
                    console.log("update")
                 }
                 deleteComment=()=>{
                     console.log("delete")

                }
                toggle=()=>{
                    this.setState({modal:!this.state.modal})
                    alert("tset button")
                }

    render() {
        console.log(this.props)
        console.log(this.state.text)
        return (
            <div>
                {/* <form className="form-group mt-2" onSubmit={()=>this.handlSubmit} >
                     <div style={{
                        display:"flex"
                    }}>
                        
                    
                    <input type="text" name="text" class="form-control" id={this.props.myId} placeholder="Write your comment here...." value={this.state.text} onChange={this.handleChange}/>
                    <button type="submit" >
                        <BiCaretRight size={30}/>
                        </button>
                        </div>
                        
                </form> */}
                <Form id ={this.props.myId} onSubmit={this.handlSubmit}>
                    <Form.Group>
                        
                        <Form.Control type="text" as="textarea" rows="1" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{height:22, paddingTop:0}}>
                    <BiCaretRight size={30}/>
                    </Button>
                    
                </Form>  
                {this.props.comments.map(comment=>{
                    return(
                       
                        <div className="container" style={{border:"1px solid grey",borderRadius:"15px",padding:"5px",margin:"5px"}}>
                            <div className="row">
                            <div className="col-3">
                                <img src={comment.avater} alt ="user avater" className="img-rounded rounded-circle" height="30px" />
                                </div>
                            <div className="col-9">

                                <h6>
                                    {comment.userName}
                                </h6>

                            </div>

                            </div>
                            <div className="row">
                            
                            <div className="col-12">

                                <p>
                                    {comment.text}
                                </p>

                            </div>

                            </div>
                            <div className="row">
                            
                            <div className="col-6">

                                <p style={{marginBottom:0}}>
                                    {dateformat(comment.time,"fullDate")}
                                </p>

                            </div>
                            <div className="col-3" onClick={()=>this.toggle}>

                                <BsPencil size={20}/>
                                <a type="button" onClick={()=>this.onClick}>click</a>

                            </div>
                            <div className="col-3"  onClick={()=>this.props.deleteComment(comment._id)}>

                                <BsTrash size={20}/>

                            </div>
                            <Modal id = {comment._id} show={this.state.modal} onHide={this.toggle}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <Form >
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{marginBottom: 0}}>Edit your Comment</Form.Label>
                                            <Form.Control type="text" as="textarea" rows="2" onChange = {this.handleChange}/>
                                        </Form.Group>
                                        <Button variant="primary" style={{height:22, paddingTop:0}} onClick = { ()=> this.updateComment(comment._id)}>
                                        Submit
                                        </Button> 
                                    </Form>
                                </Modal.Body>
                                </Modal>





                           

                            </div>
                        </div>
                    )
                })}
                
            </div>
        )
    }
}
 const mapStateToProps=state=>({
     comments:state.comments.items
 })
export default connect(mapStateToProps,{getComments,addComment,updateComment,deleteComment})(Comment)
