import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';


describe('App', () => {
	
	let app;

		beforeEach(()=>{
			app = shallow(<App />);
		});
	 

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

		it("renders Patients correctly", ()=> {
			app.setState({
				PatientPortal: true
			});
				expect(app.find('Patients').exists()).toBe(true);
		});
	});

	// describe("handleportalClicked function when click button", ()=>{
	// 	it("invokes the function when click patients button", () => {
	// 		let mockprops=jest.fn()
	// 		let app2 = shallow(<App handlePortalClicked={mockprops} />);
	// 		app2.instance().handlePortalClicked = jest.fn();
	// 		let { handlePortalClicked } = app2.instance();
	// 		expect(handlePortalClicked).toHaveBeenCalledTimes(0);
	// 		app.find('.submitButton').simulate('click'); 
	// 		expect(handleSubmit).toHaveBeenCalledTimes(1);
	// 	})
	// })

});