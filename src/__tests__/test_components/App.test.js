import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';


describe('App', () => {
	
	let app = shallow(<App />);

	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});	

	describe('Rendering components', () => {

		it("renders Header component correctly", () => {
			expect(app.find('Header').exists()).toBe(true);
		});

		it("renders SubmitButton correctly", () => {
			expect(app.find('SubmitButton').exists()).toBe(true);
		});
	});

});