import React from 'react';
import Logo from '../KidsForMathLogo.png'

const Image = () =>
{
    return (
        <div className="login__image">
            <img src={ Logo } alt="Math for kids Logo" />
            <h1>Math For Kids</h1>
        </div>
    );
};

export default Image;