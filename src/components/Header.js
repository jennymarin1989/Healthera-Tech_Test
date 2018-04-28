import React from 'react';
import Title from './styling/title';


const Header = (props) => {
    return (
        <Title>
        <h1> {props.header} </h1>
        </Title>
    )
};

export default Header;