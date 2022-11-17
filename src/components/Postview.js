import '../styles/Postview.css'
import React, { useState, useEffect } from 'react';
import User from './User';
import Header from './Header';
import { getUsers } from '../utils/apiutil';

import post0 from '../images/post0.png'
import post1 from '../images/post1.png'
import post2 from '../images/post2.png'

const userList = [
  {
    "name": "Siva",
    "location": "Bengaluru",
    "likes": 64,
    "description": "Kick start your career",
    "PostImage": post0,
    "date": "12/02/2022"
  },
  {
    "name": "Neeraj",
    "location": "Pune",
    "likes": 30,
    "description": "Sample Description",
    "PostImage": post1,
    "date": "15/05/2022"
  },
  {
    "name": "Rahul",
    "location": "Hyderabad",
    "likes": 30,
    "description": "Sample Description for Post",
    "PostImage": post2,
    "date": "10/06/2022"
  }
]

export default function Postview() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // getUsers().then(res => {
    //     setUsers(res)
    // });
    setUsers(userList);
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="postview-container">
        <div className="postview">
          {
            users.map((user, index) => {
              return <User key={index} user={user} />
            })
          }
        </div>
      </div>

    </div>);
}