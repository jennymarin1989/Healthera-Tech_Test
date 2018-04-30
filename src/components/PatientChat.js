import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import 'bootstrap/dist/css/bootstrap.min.css';



class PatientChat extends Component {
		constructor(){
			super();
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
			console.log(this.state.messages)
    }

    render(){
        return(
            <div className="form-control">
            <div className="form-group">
                <div className="col-16">
                    <div className="card">
                            <div className="card-title">
																<h3>Messages</h3>
														</div>
                            <hr/>
														<div class="help-block"></div>
                            <div className="messages" style={{marginTop:'20px'}}>
															{this.state.messages.map(function(message,i) {
																return (
																		<ul key={i}>{message}<hr/></ul>
																			)
																})
															}   
                            </div>
                        </div>
                        <div className="card-footer">
                                <input type="text" class="form-control" placeholder="Message" value={this.state.message} onChange={this.updatePatientMessage} className="form-control"/>
                                <SubmitButton
																	name={"Send"}
																	id={"send-msg"}
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