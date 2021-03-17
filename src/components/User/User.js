import React from 'react';

const User = (props) => {
    return (
        <div>
name: {props.name}<br/>
age: {props.age} <br/>
date: {props.date}

        </div>
    );
};

export default User;