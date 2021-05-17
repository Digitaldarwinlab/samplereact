import React, { Component } from "react";
import {notNull} from "./action";
import { connect } from "react-redux";

class App extends Component {
  errorPayload= {
    "propertyName":'',
    "pValue":'',
    "errorMsg":'',
    "status":"S"
  };
  constructor() {
    super();
    this.state = {
     
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  
  }

  onInputchange(event) {
    this.errorPayload.status='S'; 
    this.setState({
      [event.target.name]: event.target.value
    });
  
    
  }

  onSubmitForm() {
    console.log(this.state);
    this.errorPayload.propertyName="fisrt Name";
    this.errorPayload.pValue=this.state.fname;
    this.props.checkNotNull(this.errorPayload);
    console.log(this.errorPayload);
  if(this.errorPayload.status==='F'){
    alert(this.errorPayload.errorMsg);
    
  }
  }

  render() {
    const { items } = this.state;


    return (
      <div>
        
        <div>
          <label>
            First Name :
            <input
              name="fname"
              type="text"
              value={this.state.fname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input
              name="lname"
              type="text"
              value={this.state.lname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
            <button onClick={this.onSubmitForm}>Submit</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
 
  checkNotNull: message => {
    console.log("message:"+message);
  dispatch(notNull(message));

  },
 });
export default   connect(null, mapDispatchToProps)(App);;