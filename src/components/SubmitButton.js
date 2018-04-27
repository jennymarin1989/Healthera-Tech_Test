import React from 'react'

const SubmitButton = props => {

    return(
        <button id={"submitButton"} onclick={props.handleDataSubmitted}>{props.name}</button>
    );
};

export default SubmitButton;