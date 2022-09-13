import React, {useState} from 'react';
import Axios from 'axios';
import FormInput from '../Components/FormInput';
import ConfirmButton from '../Components/ConfirmButton';
import Image from '../Components/Image';
import AdditionalSentence from '../Components/AdditionalSentence';

const Login = () =>
{
    const forms = document.getElementById("forms");
    let windowWidth = window.innerWidth;

    window.onresize = () => {
        windowWidth = window.innerWidth;
        console.log(windowWidth);
    }

    const showSignUp = () => {
        const forms = document.getElementById("forms");
        if(windowWidth >= 700) {
            forms.style.top = '-25rem';
        }
        else {
            forms.style.left = '-37rem';
        }
        setEmail('');
        setPassword('');
    }

    const showLogin = () => {
        const forms = document.getElementById("forms");

        if(windowWidth >= 700) {
            forms.style.top = '25rem';
        }
        else {
            forms.style.left = '38rem';
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const submitLogin = () => {
    //     Axios.post('http://localhost:8080/login', JSON.parse({
    //         "email" : email,
    //         "password" : password,
    //     }));
    // }

    return (
        <div className="login-page">
            <div className="login">
                <Image />
                <div className="forms" id="forms">
                    <div className="login__form">
                        <form>
                            <FormInput placeholder="Email" id="email"
                                       type="email" required="true"
                                       onchange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput placeholder="Password" id="password"
                                       type="password" required="true"
                                       onchange={(e) => setPassword(e.target.value)}
                            />

                            <ConfirmButton value="Login" />

                        </form>

                        <AdditionalSentence sentence="Don't have an account?"
                                            option=" Sign up" onclick={ () => {
                            const forms = document.getElementById("forms");
                            if(windowWidth >= 700) {
                                forms.style.top = '-25rem';
                            }
                            else {
                                forms.style.left = '-37rem';
                            }
                            setEmail('');
                            setPassword('');
                        } }  />
                    </div>

                    <div className="sign-up__form" >
                        <form>
                            <FormInput placeholder="Email" id="email"
                                       type="email" required="true"
                                       onchange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput placeholder="Password" id="password"
                                       type="password" required="true"
                                       onchange={(e) => setPassword(e.target.value)}
                            />
                            <FormInput placeholder="Confirm Password" id="confirmPassword"
                                       type="password" required="true"
                                       onchange={(e) => setConfirmPassword(e.target.value)}
                            />

                            <ConfirmButton value="Sign up" />

                        </form>

                        <AdditionalSentence sentence="Already have an account?"
                                            option=" Login" onclick={ () => {
                            const forms = document.getElementById("forms");

                            if(windowWidth >= 700) {
                                forms.style.top = '25rem';
                            }
                            else {
                                forms.style.left = '38rem';
                            }
                            setEmail('');
                            setPassword('');
                            setConfirmPassword('');
                        }
                        }  />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;