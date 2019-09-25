import React from 'react';
import profiles from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={profiles.content}>
            <ProfileInfo/>
            <MyPost
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}/>

        </div>
    );
};

export default Profile;