import React from 'react';
import Title from '../../components/styling/title'
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import renderer from 'react-test-renderer';

describe('Header', () => {

    let header = shallow(<Header />);

  it('renders correctly', () =>{
		expect(header).toMatchSnapshot();
  })

describe('renders component correctly', ()=>{
    let title = renderer
    .create(<Title>Healthera</Title>)
    .toJSON();
   expect(title).toMatchSnapshot();
})
  
});