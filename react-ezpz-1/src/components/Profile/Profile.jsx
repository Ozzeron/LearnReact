import React from 'react';
import profiles from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={profiles.content}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    );
};

export default Profile;