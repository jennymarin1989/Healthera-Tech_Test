import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import 'bootstrap/dist/css/bootstrap.min.css';



class PatientChat extends Component {

  constructor(props){
    super(props);
    this.state ={
      message: "",
      messages: []
    }
    this.updatePatientMessage = this.updatePatientMessage.bind(this)
  }

  updatePatientMessage = (event) =>{
    this.setState({
      message: event.target.value
    });
  }
  
  sendMessage = (text) =>{
    var newMessage = this.state.messages.slice()
    newMessage.push(this.state.message)
      this.setState({
        messages: newMessage
      })
  }

render(props){
  return(
    <div className="form-horizontal">
      <div className="form-group has-success has-feedback">
        <div className="col-16">
         <div className="card">
            <div className="card-title" >
              <h4 style={{backgroundColor:'MediumSeaGreen'}}>{this.props.patient}</h4>
              </div>
                <div className="messages" style={{marginTop:'20px'}}>
                  {this.state.messages.map(function(message,i) {
                    return (
                      <ul key={i} style={{backgroundColor:'MediumSeaGreen'}}>{message}<hr/></ul>
                       )
                    })
                  }   
                </div>
            </div>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="@Message" value={this.state.message} onChange={this.updatePatientMessage}/>
                  <SubmitButton
                    name={"Send"}
                    id={"send-msg"}
                    newClass={"btn btn-success"}
                    handleSubmit = {this.sendMessage}
                  />
              </div>
          </div>
      </div>
    </div>
      )
    }
}

export default PatientChat;