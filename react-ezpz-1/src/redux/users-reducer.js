const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {city: 'Kiyiv', country: 'Ukraine'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: 'Andrew',
        //     status: 'I am a boss too',
        //     location: {city: 'Paris', country: 'France'}
        // }
    ],
    newPostText: '',
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
    return state;
};

export const followAC = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
};

export const unfollowAC = (userID) => {
    return {
        type: UNFOLLOW
        userID
    }
};

export const setUsersAC = (users) => (type: SET_USERS, users
)
;

export default usersReducer;