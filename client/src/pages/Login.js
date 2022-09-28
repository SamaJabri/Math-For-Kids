import React, {useState} from 'react';
import Axios from 'axios';
import FormInput from '../Components/FormInput';
import ConfirmButton from '../Components/ConfirmButton';
import Image from '../Components/Image';
import AdditionalSentence from '../Components/AdditionalSentence';
import {NavLink} from 'react-router-dom';

const Login = (props) =>
{
    let windowWidth = window.innerWidth;

    window.onresize = () => {
        windowWidth = window.innerWidth;
        console.log(windowWidth);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitLogin = () => {
        Axios.post('http://localhost:8080/login',{
            "email" : email,
            "password" : password,
        })
        .then((response) =>
            {
                if(response.data !== '') {
                    // alert("Success Login");
                    localStorage.setItem("authenticated", true);
                    localStorage.setItem("id", JSON.stringify(response.data));
                    redirectToHome();
                }
                else {
                    logInFailed("Wrong Credentials!");
                    localStorage.setItem("authenticated", false);
                }

                return response.data;
            }
        )
        .catch((error) => console.log(error));
    }

    const submitSignUp = () => {
        if(email.length && password.length && (password === confirmPassword)) {
            Axios.post('http://localhost:8080/signup',{
                "email" : email,
                "password" : password,
            }).then(function (response) {
                if(response.data === true) {
                    // alert("Registration successful");
                    localStorage.setItem("authenticated", true);
                    redirectToHome();
                }
                else {
                    alert("Some error occurred");
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            logInFailed();
        }
    }

    const redirectToHome = () => {
        document.getElementById('form-button--redirect').click();
    }

    const resetFields = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const logInFailed = (string) => {
        return (
            <p className="wrong-credentials">{string}</p>
        )
    }

    return (
        <div className="login-page">
            <div className="login">
                <Image />
                <div className="forms" id="forms">
                    <div className="login__form">
                        <form onSubmit={(e) => e.preventDefault()}>
                            {
                                logInFailed
                            }
                            <FormInput placeholder="Email" id="email" class="form-input"
                                       type="email" required="true" value={email}
                                       onchange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput placeholder="Password" id="password" class="form-input"
                                       type="password" required="true" value={password}
                                       onchange={(e) => setPassword(e.target.value)}
                            />

                            <NavLink to={'/home'} >
                                <button id="form-button--redirect" style={{ display: 'none' }} >hi</button>
                            </NavLink>

                            <ConfirmButton value="Login" onclick={ submitLogin } type="submit" />

                        </form>

                        <AdditionalSentence sentence="Don't have an account?"
                                            option=" Sign up"
                                            onclick={ () => {
                                                const forms = document.getElementById("forms");

                                                if(windowWidth >= 700) {
                                                    forms.style.top = '-25rem';
                                                }
                                                else {
                                                    forms.style.left = '-37rem';
                                                }

                                                resetFields();
                                                }
                                            }  />
                    </div>

                    <div className="sign-up__form" >
                        <form onSubmit={(e) => e.preventDefault()}>
                            {
                                logInFailed
                            }
                            <FormInput placeholder="Email" id="email" class="form-input"
                                       type="email" required="true" value={email}
                                       onchange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput placeholder="Password" id="password" class="form-input"
                                       type="password" required="true" value={password}
                                       onchange={(e) => setPassword(e.target.value)}
                            />
                            <FormInput placeholder="Confirm Password" id="confirmPassword" class="form-input"
                                       type="password" required="true" value={confirmPassword}
                                       onchange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {
                                password !== confirmPassword ?
                                <p className="password-matching">Passwords don't match</p> : null
                            }

                            <ConfirmButton value="Sign up" type="submit" onclick={ submitSignUp } />

                        </form>

                        <AdditionalSentence sentence="Already have an account?"
                                            option=" Login"
                                            onclick={ () => {
                                                const forms = document.getElementById("forms");

                                                if(windowWidth >= 700) {
                                                    forms.style.top = '25rem';
                                                }
                                                else {
                                                    forms.style.left = '38rem';
                                                }
                                                resetFields()
                                                }
                                            }  />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;