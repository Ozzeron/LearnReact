import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 15},
    {id: 1, message: 'Hi, how are you', likesCount: 15},
    {id: 2, message: "It\'s my first post", likesCount: 2}
];

let dialogs = [
    {id: 1, name: 'Dymych'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your react'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
];

ReactDOM.render(<App posts ={posts} messages={messages} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
