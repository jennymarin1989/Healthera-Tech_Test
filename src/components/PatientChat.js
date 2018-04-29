import React, { Component } from 'react';
import SubmitButton from './SubmitButton';



class PatientChat extends Component {
		constructor(){
			super();
			this.state ={
				message: "Message",
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
            <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
																<h3>Messages</h3>
														</div>
                            <hr/>
                            <div className="messages">
															{this.state.messages.map(function(message,i) {
																return (
																		<li key={i}>{message}</li>
																			)
																})
															}   
                            </div>
                        </div>
                        <div className="card-footer">
                                <input type="text" placeholder="Message" value={this.state.message} onChange={this.updatePatientMessage} className="form-control"/>
                                <SubmitButton
																	name={"Send"}
																	id={"send-msg"}
																	handleSubmit = {this.sendMessage}
																/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }

}

export default PatientChat;