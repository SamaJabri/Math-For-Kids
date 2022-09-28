import React, {useEffect, useState} from 'react';
import AnimatedBackground from '../Components/AnimatedBackground';
import UserProfile from '../Components/UserProfile';
import ConfirmButton from '../Components/ConfirmButton';
import FormInput from '../Components/FormInput';
import AdditionalSentence from '../Components/AdditionalSentence';
import {NavLink} from 'react-router-dom';
import Hooray from '../Components/Hooray';
import {GiPartyPopper} from 'react-icons/gi';
import {FcSportsMode} from 'react-icons/fc';
import Axios from 'axios';
import CorrectSound from '../CorrectAnswer.m4a';
import WrongSound from '../videoplayback.m4a';
import Sound from 'react-sound';

const Basics = () =>
{
    const [answer, setAnswer] = useState({
        id: 0,
        value : '',
        isCorrect : false,
    });

    const [isPlayingCorrect, setIsPlayingCorrect] = useState(false);
    const [isPlayingFalse, setIsPlayingFalse] = useState(false);

    const [basicsList, setBasicsList] = useState([]);

    useEffect((() => {
        Axios.get('http://localhost:8080/get_operations')
        .then((response) => {
            if(response.status !== 200) {
                alert("Something happened, please refresh :(");
            }
            else {
                setBasicsList(response.data);
            }
        }).catch((error) => console.log(error));
    }),[]);

    const submitExercises = () => {
        Axios.post('http://localhost:8080/increaseExperience',{
            "date" : new Date(),
            "amount" : basicsList.length,
            "accountID" : localStorage.getItem("id")
        })
        .then((response) =>
            {
                if(response.data !== '') {
                    document.getElementById('basics-button--redirect').click()
                }
                else {
                    alert("Oops! Something went wrong :(");
                }

                return response.data;
            }
        )
        .catch((error) => console.log(error));
    }

    const list = [
            {
                id : 1,
                left: 4,
                operator: "+",
                right: 6,
                answer: 10,
                hidden: "left",
            },
           {
               id : 2,
               left: 5,
               operator: "-",
               right: 5,
               answer: 0,
               hidden: "operator",
           },
           {
               id : 3,
               left: 15,
               operator: "x",
               right: 2,
               answer: 30,
               hidden: "right",
           },
           {
               id : 4,
               left: 100,
               operator: "+",
               right: 200,
               answer: 300,
               hidden: "answer",
           }
        ];

    const setAnswerOnChange = (e, id, blank) => {
        const comparison =
            (String(blank) === "-" ||
                String(blank) === "+" ||
                    String(blank) === "/" ||
                        String(blank) === "x")
                ? e.target.value
                : Number(e.target.value);

        setAnswer({...answer,
            id : id,
            value : e.target.value,
            isCorrect: comparison === blank,
        })
    }

    const playSoundEffect = (e, blank) => {
        setIsPlayingFalse(false);
        setIsPlayingCorrect(false);

        const comparison =
            (String(blank) === "-" ||
                String(blank) === "+" ||
                    String(blank) === "/" ||
                        String(blank) === "x")
                ? e.target.value
                : Number(e.target.value);

        (e.target.value === '' || e.target.value === ' ')
            ? setIsPlayingFalse(false) && setIsPlayingCorrect(false)
            : comparison === blank
                ? setIsPlayingCorrect(true) && setIsPlayingFalse(false)
                : setIsPlayingFalse(true) && setIsPlayingCorrect(false);

    }

    const handleChange = (e, blank, id) => {
        console.log(e);
        console.log(blank);
        console.log(id);
        playSoundEffect(e, blank);
        setAnswerOnChange(e, id, blank);
    }

    const leavePopup = document.getElementById("submit-leaving-lesson");

    window.onclick = function (event) {
        if(event.target === leavePopup) {
            leavePopup.style.display = 'none';
        }
    }

    return (
        <div className="homepage--basics">
            <AnimatedBackground />
            <UserProfile />

            <Sound
                url={ CorrectSound }
                playStatus={ isPlayingCorrect ? Sound.status.PLAYING : Sound.status.STOPPED }

            />

            <Sound
                url={ WrongSound }
                playStatus={ isPlayingFalse ? Sound.status.PLAYING : Sound.status.STOPPED }

            />

            <div id="hooray" className="hooray">
                <h1>
                    Hooray
                    <FcSportsMode />
                </h1>
                <p>You earned
                    {/*Change 'list' to 'basicsList' on integration*/}
                    <span>  { basicsList && basicsList.length } points</span>
                </p>
                <Hooray />
                <ConfirmButton value="Go home" type="button"
                onclick={ submitExercises }/>
            </div>

            <div className="basics" id="questions">

                {
                	  basicsList &&
                    // Change 'list' to 'basicsList' on integration
                    basicsList.map((question) => {
                    		console.log(question);
                        return (
                            <div key={ question.id }>
                                <div className="basics__question" >
                                    <h2 className="basics__header">Question { question.id }</h2>
                                    <div className="basics__equation">

                                        {
                                            question.hidden === "left"
                                                ? <FormInput class={ answer.value === ''
                                                    ? 'basics__blank'
                                                    : Number(answer.value) === Number(question.left)
                                                        ? 'basics__blank right'
                                                        : 'basics__blank wrong'
                                                    }
                                                             placeholder="..."
                                                             type="number"
                                                             onchange={
                                                                 (e) => handleChange(e, question.left, question.id)
                                                             }
                                                />
                                                : <p className="basics__number">{ question.left }</p>
                                        }

                                        {
                                            question.hidden === "operator"
                                                ? <FormInput class={ answer.value === ''
                                                    ? 'basics__blank--operator'
                                                    : answer.value === question.operator
                                                        ? 'basics__blank--operator right'
                                                        : 'basics__blank--operator wrong'
                                                    }
                                                             placeholder="..."
                                                             type="text"
                                                             onchange={
                                                                 (e) => handleChange(e, question.operator, question.id)
                                                             } />

                                                : <span className="basics__operator">{ question.operator }</span>
                                        }

                                        {
                                            question.hidden === "right"
                                                ? <FormInput class={ answer.value === ''
                                                    ? 'basics__blank'
                                                    : Number(answer.value) === Number(question.right)
                                                        ? 'basics__blank right'
                                                        : 'basics__blank wrong'
                                                    }
                                                             placeholder="..."
                                                             type="number"
                                                             onchange={
                                                                 (e) => handleChange(e, question.right, question.id)
                                                             } />
                                            : <p className="basics__number">{ question.right }</p>
                                        }

                                        <p className="basics__operator">=</p>

                                        {
                                            question.hidden === "answer"
                                                ? <FormInput class={ answer.value === ''
                                                    ? 'basics__blank'
                                                    : Number(answer.value) === Number(question.answer)
                                                        ? 'basics__blank right'
                                                        : 'basics__blank wrong'
                                                    }
                                                            placeholder="..."
                                                             type="number"
                                                            onchange={
                                                                (e) => handleChange(e, question.answer, question.id)
                                                            } />
                                                : <p className="basics__number">{ question.answer }</p>
                                        }

                                    </div>
                                    <div className="basics__buttons">
                                        <ConfirmButton value="Next" type="button" disabled={ !answer.isCorrect }
                                                       id="NextQuestionButton"
                                                       onclick={ () => {

                                                               const questions = document.getElementById("questions");
                                                               let top = window.getComputedStyle(questions).top;
                                                               // let top = questions.style.getPropertyValue("top").value;
                                                               console.log(top);
                                                               //-75%
                                                               questions.style.top = `calc(${top} - 49rem)`;
                                                               setAnswer({...answer, id: 0});

                                                               if(answer.id === basicsList.length) {

                                                                   document.getElementById("hooray").style.display = 'flex';
                                                                   // Send request to backend to add list.length points to user
                                                               }

                                                               setAnswer({...answer, isCorrect: false});
                                                            }
                                                       } />

                                        <ConfirmButton value="Leave lesson" type="button"
                                        onclick={() => document.
                                        getElementById("submit-leaving-lesson").style.display = 'flex'} />

                                    </div>

                                </div>
                                <p className="basics__question-number">{question.id} / {basicsList.length}</p>
                            </div>
                        )
                    })
                }
            </div>

            {
                <div id="submit-leaving-lesson" className="submit-leaving-lesson">
                    <span className="helper" />

                    <div >
                        <div onClick={() => document.getElementById("submit-leaving-lesson").style.display = 'none'}
                             className="delete-popup close-button">&times;</div>
                        <p>Are you sure you wanna leave this lesson</p>
                        <p> You will lose all your progress :(</p>

                        <ConfirmButton value="Leave" type="button"
                                       onclick={() => document.
                                       getElementById('basics-button--redirect').click()} />
                        <NavLink to={'/home'} >
                            <button id="basics-button--redirect" style={{ display: 'none' }} >hi</button>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
    );
};

export default Basics;

{/*<div>*/}
{/*    <div className="basics__question">*/}
{/*        <h2 className="basics__header">Question 1</h2>*/}
{/*        <div className="basics__equation">*/}
{/*            /!*<input className="basics__blank" placeholder="..." type="number"*!/*/}
{/*            /!* onChange={(e) => setAnswer(e.target.value)} />*!/*/}
{/*            <p className="basics__number">6</p>*/}
{/*            <input className="basics__blank--operator" placeholder="..." type="text"*/}
{/*             onChange={(e) => setAnswer(e.target.value)} />*/}
{/*            /!*<span className="basics__operator">+</span>*!/*/}
{/*            <p className="basics__number">4</p>*/}
{/*            <p className="basics__operator">=</p>*/}
{/*            <p className="basics__number">10</p>*/}
{/*        </div>*/}
{/*        <ConfirmButton value="Next" type="button" />*/}
{/*    </div>*/}
{/*    <p className="basics__question-number">1 / 20</p>*/}
{/*</div>*/}

