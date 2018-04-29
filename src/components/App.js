import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
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
					<Grid>
						<Row>
						<Col xs="6" sm="4">	
					<Header 
						header={"Healthera"}
						id={"homepage"}
					/>
					<SubmitButton 
						name={"Patients"}
						id={"submitButton"}
						handleSubmit = {this.handlePortalClicked}
					/>
						{this.state.PatientPortal ? 
							<Patients />:
							null	
						}
						</Col>
						</Row>
					 </Grid>	
         </div>
        ) 
    }
}
export default App;