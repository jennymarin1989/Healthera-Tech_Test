import React from 'react'


const SubmitButton = props => {

    return(
        <button id={props.id} className={props.newClass} onClick={props.onClick}>{props.name}</button>
    );
};

export default SubmitButton;