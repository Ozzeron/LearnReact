import React from 'react';
import profiles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div className={profiles.posts}>
            my posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post />
        </div>
    );
};

export default MyPosts;