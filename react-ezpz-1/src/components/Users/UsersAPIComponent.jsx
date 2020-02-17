import React from 'react';
import * as axios from 'axios';

import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        console.log(this.props);
        axios.get(`http://localhost:4000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:4000/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data)
            });
    };

    render() {
        return <Users/>
    }
}

export default UsersAPIComponent;