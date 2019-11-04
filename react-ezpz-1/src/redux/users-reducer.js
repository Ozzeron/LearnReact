const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1,followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2,followed: false, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Kiyiv', country: 'Ukraine'}},
        {id: 3,followed: true, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Paris', country: 'France'}}
    ],
    newPostText: '',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case
        default:
            return state;
    }
    return state;
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

export default usersReducer;