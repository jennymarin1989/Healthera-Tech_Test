import React from 'react';
import { shallow } from 'enzyme';
import PatientChat from '../../components/PatientChat';


describe('PatientChat',() => {

		let chat = shallow(<PatientChat />)
	
		it("renders correctly", () => {
			expect(chat).toMatchSnapshot();
		});	

	describe("initializes state succesfully", () => {
		it("initializes state for message", () => {
			expect(chat.state('message')).toEqual("");
		});

		it ("initializes state for messages", () =>{
			expect(chat.state('messages')).toEqual([]);
		})
	})	

})