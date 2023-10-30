import React from 'react';

function MyComponent(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default MyComponent;