import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:4000/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pagination = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagination.push(i);
        }
        return <div>
            <div>
                {pagination.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u._id}>
              <span>
                <div>
                    <img src={u.photoUrl ? u.photoUrl : userPhoto} className={styles.userPhoto} alt=""/>
                </div>
                  <div>
                      {u.followed ? <button onClick={() => {
                          this.props.unfollow(u._id)
                      }}>Unfollow</button> : <button onClick={() => {
                          this.props.follow(u._id)
                      }}>Follow</button>}
                  </div>
              </span>
                    <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>

                    <div></div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;