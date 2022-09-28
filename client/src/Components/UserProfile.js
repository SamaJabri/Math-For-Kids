import React, {useState} from 'react';
import { TbMoodKid } from 'react-icons/tb';
import ConfirmButton from './ConfirmButton';
import {NavLink} from 'react-router-dom';

const UserProfile = () =>
{
    let [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem("id");
        localStorage.setItem("authenticated", false);
        document.getElementById('form-button--redirect').click();
    }

    //
    // const getData = () => {
    //     return Axios.get('http://localhost:8080/');
    // }

    return (
        <div className="user-profile">

            <div className="user-profile__icon" onClick={ () =>
            {
                console.log(isOpen);
                setIsOpen(!isOpen);
            }}>
                <TbMoodKid />
            </div>

            { isOpen &&
                <div className="flex user-profile__model" id="user-model">

                    <ConfirmButton value="Statistics" type="button" onclick={
                        () => document.getElementById('statistics-button--redirect').click()
                    } />
                    <ConfirmButton value="Log out" type="button" onclick={ logout } />

                </div>
            }

            <NavLink to={'/'} >
                <button id="form-button--redirect" style={{ display: 'none' }} >hi</button>
            </NavLink>

            <NavLink to={'/statistics'} >
                <button id="statistics-button--redirect" style={{ display: 'none' }} >stat</button>
            </NavLink>
        </div>
    );
};

export default UserProfile;