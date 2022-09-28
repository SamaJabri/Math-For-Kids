import React from 'react';

const ConfirmButton = ( props ) =>
{
    return (
        <button className="form-button"
                type={ props.type }
                onClick={ props.onclick }
                disabled={ props.disabled }
                key={ props.key }
                id={ props.id }
        >
            { props.value }
        </button>
    );
};

export default ConfirmButton;