import React from 'react'

const SubmitButton = props => {

    return(
        <button id={"submitButton"} onClick={props.handlePortalClicked}>{props.name}</button>
    );
};

export default SubmitButton;