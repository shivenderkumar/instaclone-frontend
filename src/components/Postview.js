import '../styles/Postview.css'
import React, { useState, useEffect } from 'react';
import Header from './Header';

import { usePosts } from './PostContext';
import Post from './Post';

export default function Postview() {
  const [postsList, setPostsList] = useState([]);
  const {posts} = usePosts();
  useEffect(() => {
    console.log("Posts in postview : ",posts);
    console.log("PostList in postview : ",postsList);
    setPostsList(posts);
  }, [posts]); //most important step change in context doesnt rerender all of its chil comps and postList state is holding value of previous post context

  return (
    <div className="app">
      <Header />
      <div className="postview-container">
        <div className="postview">
          {
            postsList.map((post, index) => {
              return <Post key={index} post={post} />
            })
          }
        </div>
      </div>

    </div>);
}