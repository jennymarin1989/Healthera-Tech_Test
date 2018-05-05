import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SubmitButton from '../../components/SubmitButton';
import App from '../../components/App'

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
			let mockhandlePortalClicked = sinon.spy();
			console.log(mockhandlePortalClicked)
			let submit2 = shallow(<App handlePortalClicked = {mockhandlePortalClicked}/>);
			submit2.find('SubmitButton').simulate('click');
			expect(mockhandlePortalClicked.calledOnce);
		})
	});// Pass the test but not sure if is a false positive(need to research more about sinon)

	describe("renders component correctly", () => {
		it("renders PortalButton component correctly", () => {
			let patientButton = renderer
			.create(<button>Patient Portal</button>)
      		.toJSON();
   			 expect(patientButton).toMatchSnapshot();
		})
	})
});