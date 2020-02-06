const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 20,
    currentPage: 1
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users.items]}
        }
        default:
            return state;
    }
    return state;
};

export const followAC = (userId) => ({
    type: FOLLOW, userId
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW, userId
});

export const setUsersAC = (users) => ({
    type: SET_USERS, users
});

export default usersReducer;