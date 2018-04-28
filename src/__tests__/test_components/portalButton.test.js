import React from 'react';
import styled from 'styled-components';
import render from 'react-test-renderer';
import PortalButton from '../../components/styling/portalButton';
import 'jest-styled-components';


describe('Portal Patient button', ()=>{
    let title = render.create(<PortalButton />).toJSON();
  it('should render the button style correctly', () =>{
     expect(title).toMatchSnapshot();
     expect(title).toHaveStyleRule('background', 'transparent', 'color', 'MediumSeaGreen','border', 'none', ) 
  })  
})