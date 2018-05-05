import React from 'react'


const SubmitButton = props => {

    return(
        <button id={props.id} className={props.newClass} onClick={props.handleSubmit}>{props.name}</button>
    );
};

export default SubmitButton;