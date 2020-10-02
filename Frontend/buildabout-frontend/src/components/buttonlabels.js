import React from 'react';

function ButtonLabel(props){
    return (<div className={'ButtonLabel-'+props.buttonSize}> {props.label} </div>
		
    )
}

export default ButtonLabel;
