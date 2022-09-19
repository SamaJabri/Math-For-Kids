import React, {useEffect} from 'react';
import Axios from 'axios';
import UserProfile from '../Components/UserProfile';
import AnimatedBackground from '../Components/AnimatedBackground';
import ChooseMode from '../Components/ChooseMode';

const HomePage = (props) =>
{
    useEffect((() => {
        Axios.get('http://localhost:8080/get-user', {
            header : {
                // id here needs to be changed to be dynamic
                'id' : 1
            }
        }).then((response) => {
            if(response.stats !== 200) {
                redirectToLogin();
            }
        }).catch((error) => console.log(error));
    }));

    const redirectToLogin = () => {
        props.history.push('/login');
    }

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