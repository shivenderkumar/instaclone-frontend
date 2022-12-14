import '../styles/User.css'
import React from "react";
import dotsimg from '../images/threedots.png'
import heartblank from '../images/heartblank.png'
import share from '../images/share.png'

export default function Post({ post }) {
    return (
        <div className="post-container">
            <div className="post-header">
                <div className="header-text">
                    <div>
                        <h5 >{post.name}</h5>
                        <h5 className="lighterfont" id="location">{post.location}</h5>
                    </div>
                </div>
                <div className="header-dotimg">
                    <div>
                        <img src={dotsimg} />
                    </div>
                </div>
            </div>
            <div className="post-img">
                <div>
                    <img src={post.imageurl}/>
                </div>
            </div>
            <div className="post-bar-2">
                <div className="div-likesharecount">
                    <div className="div-likeshare">
                        <div className="div-heartshare">
                            <img id="heartblank" src={heartblank} />
                            <img id="share" src={share} />
                        </div>
                    </div>
                    <div className="div-likes">
                        <h5 className="lighterfont" id="likes">{`${post.likes} likes`}</h5>
                    </div>
                </div>
                <div className="date-container">
                    <h5 className="lighterfont" id="date">{post.date.substring(0,24)}</h5>
                </div>
            </div>
            <div className="post-bar-3">
                <div>
                    <h5 >{post.description}</h5>
                </div>
            </div>
        </div>);
}



{/* <div>Likes: {user.likes}</div>
<div>Description: {user.description}</div>
<div>PostImage: {user.PostImage}</div>
<div>Date: {user.date}</div> */}