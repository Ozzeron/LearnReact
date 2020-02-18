import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    ToggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        console.log(this.props);
        axios.get(`http://localhost:4000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        setTimeout(() => {
            axios.get(`http://localhost:4000/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
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
        isFetching: state.usersPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(ToggleIsFetchingAC(isFetching));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);