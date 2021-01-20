import React from 'react';

// import { Link } from '@reach/router';

const NumComponent = props => {
    return (
        <>
            {isNaN(props.input) ? <h2>The word is: {props.input}</h2> : <h2>The number is: {props.input}</h2>}
        </>
    );
}

export default NumComponent;