import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length == 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/24/2443446041852c9c98ae806b3e37d768500745bd_full.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/24/2443446041852c9c98ae806b3e37d768500745bd_full.jpg',
                    followed: false,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Kiyiv', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/24/2443446041852c9c98ae806b3e37d768500745bd_full.jpg',
                    followed: true,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Paris', country: 'France'}
                }]
        );
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
              <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                </div>
                  <div>
                      {u.followed ? <button onClick={() => {

                          props.unfollow(u.id)
                      }}>Unfollow</button> : <button onClick={() => {
                          props.follow(u.id)
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
};

export default Users;