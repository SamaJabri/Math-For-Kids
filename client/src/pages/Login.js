import React, {useState} from 'react';
import Axios from 'axios';
import FormInput from '../Components/FormInput';
import ConfirmButton from '../Components/ConfirmButton';
import Image from '../Components/Image';
import AdditionalSentence from '../Components/AdditionalSentence';

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

    // const navigate = useNavigate();

    const submitLogin = () => {
        Axios.post('http://localhost:8080/login',{
            "email" : email,
            "password" : password,
        })
        .then((response) =>
            {
                if(response.status === 200) {
                    alert("Success Login");
                    localStorage.setItem("authenticated", true);
                    localStorage.setItem("id", JSON.stringify(response.data));
                    redirectToHome();
                }
                else if(response.code === 204) {
                    logInFailed("Wrong Credentials!");
                    alert("Username and password don't match");
                }
                else {
                    logInFailed("Username doesn't exist");
                    alert("Username doesn't exist");
                }

                return response.data;
                // console.log(response);
                // if(response.data.message) {
                //     console.log(response.data.message);
                //     localStorage.setItem("authenticated", false);
                // }
                // else {
                //     localStorage.setItem("authenticated", true);
                //     localStorage.setItem("id", response.data.id);
                //     navigate("/home/choose-mode");
                // }
            }
        )
        .catch((error) => console.log(error));
    }

    const submitSignUp = () => {
        if(email.length && password.length) {
            Axios.post('http://localhost:8080/signup',{
                "email" : email,
                "password" : password,
            }).then(function (response) {
                if(response.status === 200) {
                    console.log("Registration successful");
                    localStorage.setItem("authenticated", true);
                    redirectToHome();
                }
                else {
                    console.log("Some error occurred");
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
        props.history.push('/home');
    }

    const resetFields = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    // const logout = () => {
    //     localStorage.removeItem("id");
    // }
    //
    // const getData = () => {
    //     return Axios.get('http://localhost:8080/');
    // }

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
                                logInFailed()
                            }
                            <FormInput placeholder="Email" id="email"
                                       type="email" required="true" value={email}
                                       onchange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput placeholder="Password" id="password"
                                       type="password" required="true" value={password}
                                       onchange={(e) => setPassword(e.target.value)}
                            />

                            <ConfirmButton value="Login" onclick={ submitLogin() } type="submit" />

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
                                logInFailed()
                            }
                            <FormInput placeholder="Email" id="email"
                                       type="email" required="true" value={email}
                                       onchange={(e) => setEmail(e.target.value)}
                            />
                            <FormInput placeholder="Password" id="password"
                                       type="password" required="true" value={password}
                                       onchange={(e) => setPassword(e.target.value)}
                            />
                            <FormInput placeholder="Confirm Password" id="confirmPassword"
                                       type="password" required="true" value={confirmPassword}
                                       onchange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {
                                password !== confirmPassword ?
                                <p className="password-matching" >Passwords don't match</p> : null
                            }

                            <ConfirmButton value="Sign up" type="submit" onclick={ submitSignUp() } />

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