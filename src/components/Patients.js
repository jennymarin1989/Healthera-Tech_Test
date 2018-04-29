import React, { Component} from 'react';
import Dropdown from 'react-dropdown';
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
				 <Header 
				 header = {"Patients"}
				 id={"patient-page"}
				 /> 
				 <Dropdown  
						 options = {data}
						 onChange = {this.onSelectedPatient}
						 value = {defaultOption}
						 placeholder = "Search for a patient"
						 />
				 <PatientChat />		 
			</div>    
	)};  
};

export default Patients;
