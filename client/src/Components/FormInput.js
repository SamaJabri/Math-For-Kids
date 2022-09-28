import React from 'react';

const FormInput = ( props ) =>
{
    return (
        <input className={props.class}
               placeholder={ props.placeholder }
               name={ props.id }
               value={ props.value }
               key={ props.key }
               type={ props.type }
               required={ props.required }
               onChange={ props.onchange }
        />
    );
};

export default FormInput;