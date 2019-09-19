import React from 'react';
import profiles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsData = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);
    return (<div className={profiles.posts} id='MyPosts'>
            my posts
            <div>
                <textarea name="text" id="text" cols="30" rows="10"></textarea>
                <div className={profiles.buttons}>
                    <button className="button" onClick={addPost}>Add post</button>
                    <button className="button">Remove</button>
                </div>
            </div>
            <div id='posts'>
                {postsData}
            </div>
        </div>
    );
};

function addPost() {
    let text = document.getElementById('text').value;
    console.log(text);
}

export default MyPosts;