import React from 'react'
import PortalButton from './styling/portalButton';

const SubmitButton = props => {

    return(
        <PortalButton id={props.id} onClick={props.handleSubmit}>{props.name}</PortalButton>
    );
};

export default SubmitButton;