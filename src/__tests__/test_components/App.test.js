import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';


describe('App', () => {
	
	let app = shallow(<App />);

	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});	

	describe("Initializes state successfully",()=> {
		it("initializes PatientPortal as false", () => {
				expect(app.state('PatientPortal')).toEqual(false);
			});
	});

	describe("Updates state  successfylly", ()=>{
		it("Changes PatientPortal state to true", ()=>{
			app.instance().handlePortalClicked();
			expect(app.state('PatientPortal')).toEqual(true);
		});
	});

	describe('Rendering components', () => {

		it("renders Header component correctly", () => {
			expect(app.find('Header').exists()).toBe(true);
		});

		it("renders SubmitButton correctly", () => {
			expect(app.find('SubmitButton').exists()).toBe(true);
		});

		it("renders Patients correctly if PatientPortal state updated successfully", () => {
			app.find('#submitButton').simulate('click');
			app.instance().handlePortalClicked();
			expect(app.state('PatientPortal')).toEqual(true);
			expect(app.find('Patients').exists()).toBe(true);
		})
	});

});