import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import App from '../../components/App';
import SubmitButton from '../../components/SubmitButton';


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

	describe("handleportalClicked function when click button", ()=>{
		it("invokes the function when click patients button", () => {
			let onClickSpy=sinon.spy()
			let app2 = mount(<App handlePortalClicked={onClickSpy} />);
			console.log(app2.state('PatientPortal'))
			app2.find('SubmitButton').last().simulate('click'); 
			console.log(app2.state('PatientPortal'))
			expect(onClickSpy.called).toBe(true);

			 // the state of PortalPatient changes to true but the assertions equals to undefined
		})
	})

});