import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';



describe('App', () => {
	let app = shallow(<App />);

	it('renders correctly', () => {
		expect(app).toMatchSnaptshot();
	});	
});