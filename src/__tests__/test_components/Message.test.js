import React, {Component} from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Message from '../../components/Messages';


describe("Message", () => {
    let message = shallow(<Message />)
  
   it('renders correctly', () => {
      expect(message).toMatchSnapshot(); 
   }) 
})