import React from 'react';
import { shallow } from 'enzyme';
import PatientChat from '../../components/PatientChat';


describe('PatientChat',() => {

		let chat = shallow(<PatientChat />)
	
		it("renders correctly", () => {
			expect(chat).toMatchSnapshot();
		});	

})