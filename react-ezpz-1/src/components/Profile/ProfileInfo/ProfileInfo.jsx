import React from 'react';
import profiles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div  className={profiles.content}>
            <img id="header-image" src="https://picsum.photos/id/510/1200/400" alt=""/>
            <div className={profiles.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;