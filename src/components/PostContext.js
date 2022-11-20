import React from "react";
import { useCallback, useContext, useEffect, useState } from "react"
import { loadAllPosts } from "../utils/apiutil";

//creating context
const PostContext = React.createContext();

//create context provider
export function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([]); //memoized version of data 
    const fetchPosts = useCallback(()=>{
        loadAllPosts()
            .then(({data}) => {
                console.log("get posts response from server : ",data);
                setPosts(data)
            });
    },[]); //memoized version of callback

    useEffect(() => {
        //fetch call to get post data from server and update posts
        console.log("PostContext posts before fetching : ",posts);
        fetchPosts();
    }, []);

    return (
        <PostContext.Provider value={{
            posts,             //all child comp can access context data     
            onPostAdded: ()=>{ // now can use this to call fetchPosts from child comp
                fetchPosts();
            }
            }}>
            {children}
        </PostContext.Provider>
    );

}

//creating cutome hook to access post context
export const usePosts = () => useContext(PostContext) ;




























// import post0 from '../images/post0.png'
// import post1 from '../images/post1.png'
// import post2 from '../images/post2.png'

// //dummy postlist
// const postsList = [
//     {
//       "name": "Siva",
//       "location": "Bengaluru",
//       "likes": 64,
//       "description": "Kick start your career",
//       "imageurl": post0,
//       "date": "12/02/2022"
//     },
//     {
//       "name": "Neeraj",
//       "location": "Pune",
//       "likes": 30,
//       "description": "Sample Description",
//       "imageurl": post1,
//       "date": "15/05/2022"
//     },
//     {
//       "name": "Rahul",
//       "location": "Hyderabad",
//       "likes": 30,
//       "description": "Sample Description for Post",
//       "imageurl": post2,
//       "date": "10/06/2022"
//     }
//   ]

