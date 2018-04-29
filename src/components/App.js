import React, { Component } from 'react';
import Header from './Header';
import SubmitButton from './SubmitButton';
import Patients from './Patients'

class App extends Component {

	constructor(){
		super();
		this.state ={
			PatientPortal: false,
		}
		this.handlePortalClicked = this.handlePortalClicked.bind(this);
	}

	handlePortalClicked = () => {
			this.setState({
				PatientPortal: !this.state.PatientPortal,
			});
	};

    render(){ 
     return(
         <div>
            <Header header={"Healthera"}/> 
				 <SubmitButton 
					name={"Patients"}
					id={"submitButton"}
					handleSubmit = {this.handlePortalClicked}
				  />
				  {this.state.PatientPortal ? 
						<Patients />:
						null	
					}
         </div>
        ) 
    }
}
export default App;