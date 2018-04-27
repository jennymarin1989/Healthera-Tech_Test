import React, { Component } from 'react';
import Header from './Header';
import SubmitButton from './SubmitButton';

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
				PatientPortal: true,
			});
	};

    render(){ 
        return(
            <div>
               <Header header={"Healthera"}/> 
							 <SubmitButton 
								 name={"Patient Portal"}
								 handlePortalClicked = {this.handlePortalClicked}
							 />
            </div>
        ) 
    }
}
export default App;