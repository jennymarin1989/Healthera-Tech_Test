import React from 'react';
import Title from './styling/title';


const Header = (props) => {
    return (
        <Title>
        <h1 id={props.id}> {props.header} </h1>
        </Title>
    )
};

export default Header;