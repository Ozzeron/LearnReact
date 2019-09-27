const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let renderEntireTree = () => {
    console.log('something has been changed')
};

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 2, message: "It\'s my first post", likesCount: 2}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dymych'},
                {id: 2, name: 'Nikita'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your react'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    avatarLink: 'http://i.mirozor.ru/u/ae/01d4824ddb11e79af1936604affaeb/-/sanandreas_vinewood_256x256.jpg'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3Nvkc9B6nQJrDSv1zDXZ1uviPTxtDawy8NU1CvrABvbcw6W6Yw'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3Nvkc9B6nQJrDSv1zDXZ1uviPTxtDawy8NU1CvrABvbcw6W6Yw'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3Nvkc9B6nQJrDSv1zDXZ1uviPTxtDawy8NU1CvrABvbcw6W6Yw'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    avatarLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3h4aYp12eYkaKaO_86zbLE9x__WtvTb8mRP67DrHAhkQtsN3'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('something has been changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newTextMessage;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newTextMessage: text
    }
};
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};

export default store;
window.store = store;