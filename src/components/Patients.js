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
		this.setState({
			selectedOption: option,
		})
	}


	render(){

		let defaultOption = this.state.selectedOption
		return (
			<div>
				<FlexView hAlignContent='left' vAlignContent='center' style={{ marginLeft: '100px' }}>
					<Header 
					header = {"Patients"}
					id={"patient-page"}
					/> 
				 </FlexView>
				 <FlexView vAlignContent='left' vAlignContent='center' style={{ marginLeft: '125px', height:'50px' } }>
						<Dropdown  
								options = {data}
								onChange = {this.onSelectedPatient}
								value = {defaultOption}
								placeholder = "Search for a patient"
								/>
					<div style={{marginLeft: "80px"}}>
				 		<PatientChat />	
					</div>	 
				</FlexView>	 
			</div>    
	)};  
};

export default Patients;
