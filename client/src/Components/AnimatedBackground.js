import React from 'react';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

const AnimatedBackground = () =>
{
    const duration = 3000;
    const ease = 'easeInOutSine';

    const loop = {
        yoyo: true,
        repeat: -1,
        duration,
        ease,
    };

    const animate = {
        numbers : {
            ...loop,
            y: 15,
            duration: 3000,
            delay: 300,
        }
    }

    let items = [];

    const generateNumbers = () => {
        for(let i = 1; i < 10; i++) {
            items.push(
                <TweenOne
                    animation={animate.numbers}
                    className="code-box-shape"
                >
                    <div>
                        {i}
                    </div>
                </TweenOne>
            )
        }
    }
    generateNumbers();
    return (
        <div className="animated-background">
            {items}
            <TweenOne
                animation={animate.numbers}
                className="code-box-shape"
            >
                <div>
                    +
                </div>
            </TweenOne>

            <TweenOne
                animation={animate.numbers}
                className="code-box-shape"
            >
                <div>
                    x
                </div>
            </TweenOne>

            <TweenOne
                animation={animate.numbers}
                className="code-box-shape"
            >
                <div>
                    =
                </div>
            </TweenOne>

            <TweenOne
                animation={animate.numbers}
                className="code-box-shape"
            >
                <div>
                    -
                </div>
            </TweenOne>

        </div>
    );
};


AnimatedBackground.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};

export default AnimatedBackground;