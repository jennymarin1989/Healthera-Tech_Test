import React, { Component } from 'react';


class PatientChat extends Component {
		constructor(){
			super();
			this.state ={
				message: "",
				messages: []
			}
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
                                <input type="text" placeholder="Message" className="form-control"/>
                                <br/>
                                <button className="btn btn-primary form-control">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }

}

export default PatientChat;