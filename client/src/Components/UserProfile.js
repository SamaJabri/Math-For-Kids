import React, {useState} from 'react';
import { TbMoodKid } from 'react-icons/tb';
import ConfirmButton from './ConfirmButton';

const UserProfile = () =>
{
    let [isOpen, setIsOpen] = useState(false);

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

                    <ConfirmButton value="Statistics" type="button" />
                    <ConfirmButton value="Log out" type="button" />

                </div>
            }
        </div>
    );
};

export default UserProfile;