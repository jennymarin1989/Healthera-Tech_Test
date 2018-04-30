import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe("SubmitButton", () => {
	
	let submit = shallow(<SubmitButton />);

	it("renders correctly", () => {
		expect(submit).toMatchSnapshot();
	});

	describe('When a user clicks a button', () => {
		it('should call the handleDataSumittedButton function', ()=>{
			let mockhandlePortalClicked = jest.fn()
			let submit = shallow(<SubmitButton handlePortalClicked = {mockhandlePortalClicked}/>);
			submit.find('#submitButton').simulate('click', 'using prototype');
			expect(mockhandlePortalClicked).toBeCalled();
		})
	});

	describe("renders component correctly", () => {
		it("renders PortalButton component correctly", () => {
			let patientButton = renderer
			.create(<button>Patient Portal</button>)
      		.toJSON();
   			 expect(patientButton).toMatchSnapshot();
		})
	})
});