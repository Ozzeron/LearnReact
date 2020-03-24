import React from 'react';
import profiles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={profiles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;