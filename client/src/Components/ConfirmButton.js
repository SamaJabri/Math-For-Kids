import React from 'react';

const ConfirmButton = ( props ) =>
{
    return (
        <button className="form-button"
                type={props.type}
                onClick={props.onclick} >
            { props.value }
        </button>
    );
};

export default ConfirmButton;