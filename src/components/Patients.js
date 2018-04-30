import React, { Component} from 'react';
import Dropdown from 'react-dropdown';
import FlexView from 'react-flexview';
import 'react-dropdown/style.css';
import Header from './Header';
import PatientChat from './PatientChat';
import data from '../data.json';


class Patients extends Component {

	constructor(){
		super();
		this.state ={
			selectedOption: "",
		}
		this.onSelectedPatient = this.onSelectedPatient.bind(this)
	}

	onSelectedPatient = (option) => {
		console.log(option)
		this.setState({
			selectedOption: option,
		});
			
	}


	render(){

		let defaultOption = this.state.selectedOption
		
		return (
			<div>
				<FlexView hAlignContent='left'  style={{ marginLeft: '100px' }}>
					<Header 
					header = {"Patients"}
					id={"patient-page"}
					/> 
				 </FlexView>
				 <FlexView vAlignContent='center' hAlignContent='left' style={{ marginLeft: '125px', marginRight:'50px',height:'20px', width: '120%' } }>
						<Dropdown  
								options = {data}
								onChange = {this.onSelectedPatient}
								value = {defaultOption}
								placeholder = "Search for a patient"
								/>
					</FlexView>		
					<div style={{marginLeft: "600px", width:'150%', marginTop:'-100px'}}>
				 		<PatientChat
						 />	
					</div>	  
			</div>    
	)};  
};

export default Patients;
