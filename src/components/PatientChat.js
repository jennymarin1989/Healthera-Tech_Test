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

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Messages</div>
                            <hr/>
                            <div className="messages">
														
                            </div>
                        </div>
                        <div className="card-footer">
                                <input type="text" placeholder="Message" value={this.state.message} onChange={this.updatePatientMessage} className="form-control"/>
                                <br/>
                                <SubmitButton
																	name={"Send"}
																	id={"send-msg"}
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