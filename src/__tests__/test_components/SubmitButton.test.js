import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';

describe("SubmitButton", () => {
	
	let submit = shallow(<SubmitButton />);

	it("renders correctly", () => {
		expect(submit).toMatchSnapshot();
	});

	describe('When a user clicks a button', () => {
		it('should call the handleDataSumittedButton function', ()=>{
			let mockDataSubmitted = jest.fn()
			let submit = shallow(<SubmitButton handlePortalClicked = {mockhanldePortalClicked}/>);
			submit.find('#submitButton').simulate('click');
			expect(mockDataSubmitted).toBeCalled();
		})
	});
});