import React from 'react';
import profiles from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={profiles.content}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
                profilePage={props.profilePage}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;