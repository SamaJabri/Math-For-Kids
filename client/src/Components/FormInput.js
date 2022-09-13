import React from 'react';

const FormInput = ( props ) =>
{
    return (
        <input className="form-input"
               placeholder={ props.placeholder }
               name={ props.id }
               type={ props.type }
               required={ props.required }
               onChange={ props.onchange }
        />
    );
};

export default FormInput;