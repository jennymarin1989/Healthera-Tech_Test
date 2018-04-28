import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Patients from '../../components/Patients';
import Message from '../../components/Messages';

describe("Patients", () => {

	let patients = shallow(<Patients />)

   it('renders components correctly',() =>{
       expect(patients).toMatchSnapshot();
   }) ;
   
   it("renders patients from data.jsn", () =>{
    let patientInfo = [
				 "Joseph Marin",
				 "Mary Davies"
			]
       expect(toJson(patientInfo)).toMatchSnapshot();
    });

 describe("renders correctly", () => {
   it("render header component correctly", () => {
       expect(patients.find('Header').exists()).toBe(true);
	 });
	 
	 it('render Message component correctly', () => {
		 expect(patients.find('Message').exists()).toBe(true);
	 })
 });

 describe("initializes state successfully", () => {
	it('initializes selectedOption as false', () => {
		expect(patients.state('selectedOption')).toEqual("");
	});
  });	

	describe("Updates states successfully", () => {
		it("changes state of selectedOption from 0 to option", () => {
			let option = [
					"Helen ruiz",
			]
		patients.instance().onSelectedPatient(option);
		expect(patients.state('selectedOption')).toEqual(["Helen ruiz"]);
		});
	});	
	
	describe("renders dropdown component successfully" ,() => {
		it("renders dropdown with patients name successfylly", () => {
			expect(patients.find('Dropdown').exists()).toBe(true);
		});
	})	
});