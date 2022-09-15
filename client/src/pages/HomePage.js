import React from 'react';
import UserProfile from '../Components/UserProfile';
import AnimatedBackground from '../Components/AnimatedBackground';
import ChooseMode from '../Components/ChooseMode';

const HomePage = () =>
{
    return (
        <div className="homepage">
            <AnimatedBackground />
            <UserProfile />

            <div className="homepage__choose-mode">
                <h2>Choose The Mode</h2>
                <div className="homepage__options">
                    <ChooseMode value="Geometry" />
                    <ChooseMode value="Basics" />
                    <ChooseMode value="Measurements" />
                </div>
              </div>
        </div>
    );
};

export default HomePage;