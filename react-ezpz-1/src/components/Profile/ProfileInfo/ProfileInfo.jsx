import React from 'react';
import profiles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div  className={profiles.content}>
            <img id="header-image" src="https://picsum.photos/id/510/1200/400" alt=""/>
            <div className={profiles.descriptionBlock}>
                <img src={(props.profile.photos)?props.profile.photos.large:userPhoto} alt=""/>
                <div>Full name: {props.profile.fullName}</div>
                <ul>
                    <li>CONTACTS:
                        <ul>
                            <li>facebook: {(props.profile.contacts)?props.profile.contacts.facebook:" "}</li>
                        </ul>
                    </li>
                    <li>About me: {props.profile.aboutMe}</li>
                    <li>Looking for a job status: {props.profile.lookingForAJob}</li>
                </ul>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;