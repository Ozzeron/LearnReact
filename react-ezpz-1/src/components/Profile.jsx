import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <img src="https://picsum.photos/id/510/1200/400" alt=""/>
            <div>
                ava+description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;