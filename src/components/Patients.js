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
								return <h3 key={patient.id} > 
								 	{patient.name} 
									</h3>  
							})
						 }
				 </ul>    
			</div>    
	)};  
};

export default Patients;