import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/CreatePost.css'
import { createPost } from "../utils/apiutil";
import { usePosts } from "./PostContext";

function isDataEmpty(data){
//    console.log("filled details : ",data);
    for(let ele in data){
        if(data[ele].length === 0){
            return true
        }
    }
    return false;
}
 
export default function CreatePost() {
    const [data, setData] = useState({
        name:"",
        location:"",
        description:"",
        likes: 0,
        postimage: '',
        date: ''
    })

    const {onPostAdded} = usePosts(); //access function of post context
    const navigate = useNavigate(); //to redirect to post view page after uploading post successfully

    return (
        <div className="form-container">
            <form action="#" method="POST" onSubmit={(e)=>{
                e.preventDefault()
                if(isDataEmpty(data)){
                    alert("fill all details")
                    return
                }

                const formData = new FormData();
                formData.append("name", data.name);
                formData.append("location", data.location);
                formData.append("description", data.description);
                formData.append("likes", 0);
                formData.append("postimage", data.postimage);
                formData.append("date", ""+data.date);
                console.log(data);

                try{
                    createPost(formData)
                    .then((res) => {
                        console.log("res of /posts/create api : ", res);
                        onPostAdded()
                        navigate('/posts/view');
                    });
                }catch(error){
                    console.log("error from /posts/create api : ",error.messgae)
                }

            }}> 
                <div>
                    <input type="file" placeholder="No file chosen" onChange={(e)=>{
                        //console.log(e.target.files[0].name);
                        setData(data => {
                            return {
                                ...data,
                                postimage: e.target.files[0], //.name,
                                date: ""+new Date()
                            }
                        })
                    }} />
                </div>
                <div className="auth-loc-conatiner">
                    <input type="text" id="input-auth" value={data.name} placeholder="Author" onChange={(e)=>{
                        setData(data =>{
                            return {
                                ...data,
                                name: e.target.value
                            }
                        })}} />
                    <input type="text" id="input-loc" value={data.location} placeholder="Location" onChange={(e)=>{
                        setData(data =>{
                            return {
                                ...data,
                                location: e.target.value
                            }
                        })}}/>
                </div>
                <div>
                    <input type="text" id="input-desc" value={data.description} placeholder="Desciption" onChange={(e)=>{
                        setData(data =>{
                            return {
                                ...data,
                                description: e.target.value
                            }
                        })
                    }}/>
                </div>
                <button>Post</button>
            </form>
        </div>
    );
}
