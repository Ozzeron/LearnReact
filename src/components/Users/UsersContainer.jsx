import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, SetPaginationRange,
    setUsers,
    setUsersTotalCount,
    ToggleIsFetching,
    unfollow,

} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import Urls from "../../urlsForApiRequests";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.ToggleIsFetching(true);
        axios.get(`${Urls}/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.ToggleIsFetching(false);
            this.props.setUsers(response.data);
            this.props.setUsersTotalCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.ToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        setTimeout(() => {
            axios.get(`${Urls}/users?count=${this.props.pageSize}&page=${pageNumber}`)
                .then(response => {
                    this.props.ToggleIsFetching(false);
                    this.props.setUsers(response.data)
                });
        }, 1000)
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        paginationRange: state.usersPage.paginationRange
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(ToggleIsFetchingAC(isFetching));
//         }
//
//     }
// };

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, ToggleIsFetching, SetPaginationRange})(UsersContainer);