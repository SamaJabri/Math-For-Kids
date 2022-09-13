import React from 'react';

const ConfirmButton = ( props ) =>
{
    return (
        <button className="form-button"
                type="submit"
                onClick={props.onclick}>
            { props.value }
        </button>
    );
};

export default ConfirmButton;