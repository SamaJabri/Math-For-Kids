import React from 'react';

const AdditionalSentence = ( props ) =>
{
    return (
        <p>
            { props.sentence }
            <a onClick={ props.onclick }>
                { props.option }
            </a>
        </p>
    );
};

export default AdditionalSentence;