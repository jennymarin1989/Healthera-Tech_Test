import React, {Component} from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Message from '../../components/Message';


describe("Message", () => {
    let message = shallow(<Message />)
  
   it('renders correctly', () => {
      expect(message).toMatchSnapshot(); 
	 }); 
	 
	 describe("Initialiazes state", () => {
		 it("initialiazes message state", ()=>{
			 expect(message).state('messageList').toEqual("");
		 })
	 });

});