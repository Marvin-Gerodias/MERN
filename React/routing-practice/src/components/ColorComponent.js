import React from 'react';

// import { Link } from '@reach/router';

const ColorComponent = props => {
    return (
        <>
            <h2 style={{"color": props.textColor, "backgroundColor": props.bkgColor}}>{props.input}</h2>
        </>
    );
}

export default ColorComponent;