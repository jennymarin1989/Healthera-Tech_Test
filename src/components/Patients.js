import React, { Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Header from './Header';
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
				 <Header header = {"Patients"}/> 
				 
			</div>    
	)};  
};

export default Patients;
