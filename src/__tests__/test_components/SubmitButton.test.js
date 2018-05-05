import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import SubmitButton from '../../components/SubmitButton';
import App from '../../components/App.js'

describe("SubmitButton", () => {
	
	let submit;

		beforeEach(()=>{
			submit = shallow(<SubmitButton />);
		});

	it("renders correctly", () => {
		expect(submit).toMatchSnapshot();
	});

	describe('When a user clicks a button', () => {
		it('should call the handleDataSumittedButton function', ()=>{
			let mockhandlePortalClicked = jest.fn()
			let submit2 = shallow(<App handlePortalClicked = {mockhandlePortalClicked}/>);
			submit2.find('SubmitButton').simulate('click', 'using prototype');
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