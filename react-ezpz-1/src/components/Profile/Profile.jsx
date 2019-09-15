import React from 'react';
import profiles from './Profile.module.css';
import MyPost from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={profiles.content}>
            <img src="https://picsum.photos/id/510/1200/400" alt=""/>
            <div>
                ava+description
            </div>
            <MyPost/>
        </div>
    );
};

export default Profile;