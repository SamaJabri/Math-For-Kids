import React from 'react';
import { TbGeometry, TbMathSymbols } from 'react-icons/tb';
import { GiWeight } from 'react-icons/gi';

const ChooseMode = (props) =>
{
    let icon;

    if(props.value === "Basics") {
        icon = <TbMathSymbols />
    }
    else if(props.value === "Geometry") {
        icon = <TbGeometry />
    }
    else if(props.value === "Measurements") {
        icon = <GiWeight />
    }

    return (
        <div>
            <div className="homepage__icon">
                { icon }
            </div>
            <p>{props.value}</p>
        </div>
    );
};

export default ChooseMode;