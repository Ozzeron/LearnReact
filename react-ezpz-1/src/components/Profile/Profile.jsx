import React from 'react';
import profiles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={profiles.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;