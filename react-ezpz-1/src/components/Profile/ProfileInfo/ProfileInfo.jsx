import React from 'react';
import profiles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={profiles.content}>
            <img src="https://picsum.photos/id/510/1200/400" alt=""/>
            <div className={profiles.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;