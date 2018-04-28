import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Patients from '../../components/Patients';

describe("Patients", () => {

    let patients = shallow(<Patients />)

   it('renders components correctly',() =>{
       expect(patients).toMatchSnapshot();
   }) ;
   
   it("renders patient name and id from data.jsn", () =>{
    let patientInfo = [
        {"id":1, "name":"Felix Smith"},
        {"id":2, "name":"Carlos Davis"},
        {"id":3, "name":"Maria Lopez"},
				{"id":4, "name":"Joseph martin"}
			]
        expect(toJson(patientInfo)).toMatchSnapshot();
    });

 describe("renders correctly", () => {
   it("render header component correctly", () => {
       expect(patients.find('Header').exists()).toBe(true);
   });
 });
 

});