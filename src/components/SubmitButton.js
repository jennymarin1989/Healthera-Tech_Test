import React from 'react'
import PortalButton from './styling/portalButton';

const SubmitButton = props => {

    return(
        <button id={props.id} class={props.newClass} onClick={props.handleSubmit}>{props.name}</button>
    );
};

export default SubmitButton;