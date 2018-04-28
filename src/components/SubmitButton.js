import React from 'react'
import PortalButton from './styling/portalButton';

const SubmitButton = props => {

    return(
        <PortalButton id={"submitButton"} onClick={props.handlePortalClicked}>{props.name}</PortalButton>
    );
};

export default SubmitButton;