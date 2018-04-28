import React from 'react';
import styled from 'styled-components';
import render from 'react-test-renderer';
import 'jest-styled-components';

describe('title', () => {
    let title = render.create(<Title />).toJSON();
  it("returns title with specific style", () => {
     expect(title).toMatchSnapshot()
     expect(title).toHaveStyleRule('color', 'green') 
  })  

})