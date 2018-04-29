import React, { Component } from 'react';
import FlexView from 'react-flexview';
import 'react-flexview/lib/flexView.css'; 
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
			 <FlexView hAlignContent="left" style={{ marginLeft: '10px' }}>
					<Header 
					header={"Healthera"}
					id={"homepage"}
					/>
			 </FlexView>

			  <FlexView vAlignContent="left" style={{ marginLeft: '20px' }}>
					<SubmitButton 
						name={"Patients"}
						id={"submitButton"}
						handleSubmit = {this.handlePortalClicked}
						/>
						{this.state.PatientPortal ? 
							<Patients />:
							null	
						}
					</FlexView>
         </div>
        ) 
    }
}
export default App;