import React from 'react';
import { shallow } from 'enzyme';
import Patients from '../../components/Patients';

describe("Patients", () => {

    let patients = shallow(<Patients />)

   it('renders components correctly',() =>{
       expect(patients).toMatchSnapshot();
   }) ;

 describe("renders correctly", () => {
   it("render header component correctly", () => {
       expect(patients.find('Header').exists()).toBe(true);
   });
 });  

});