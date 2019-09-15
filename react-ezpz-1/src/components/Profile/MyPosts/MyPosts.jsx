import React from 'react';
import profiles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (<div className={profiles.posts} id='MyPosts'>
            my posts
            <div>
                <textarea name="text" id="text" cols="30" rows="10"></textarea>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div id='posts'>
                <Post message='Hi, how are you' likesCount={15}/>
                <Post message="It's my first post" likesCount={2}/>
            </div>
        </div>
    );
};

function addPost() {
    let text = document.getElementById('text').value;
    console.log(text);
}

export default MyPosts;