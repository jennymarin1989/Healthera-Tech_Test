import React, { Component} from 'react';
import Header from './Header';
import data from '../data.json';

class Patients extends Component {
	render(){
		return (
			<div>
				 <Header header = {"Patients"}/> 
				 <ul>
						 {
							data.map(function(patient){
								return <li> {patient.id}: {patient.name}  </li>  
							})
						 }
				 </ul>    
			</div>    
	)};  
};

export default Patients;