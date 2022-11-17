import React, { useState } from "react";
import '../styles/CreatePost.css'

function isDataEmpty(data){
    for(let ele in data){
        if(data[ele].length == 0){
            return true
        }
    }
    return false;
}

export default function CreatePost() {
    const [data, setData] = useState({
        author:"",
        location:"",
        description:"",
        file: ""
    })

    return (
        <div className="form-container">
            <form action="#" method="POST" onSubmit={(e)=>{
                e.preventDefault()
                if(isDataEmpty(data)){
                    alert("fill all details")
                    return
                }

                const formData = new FormData();
                formData.append("author", data.author);
                formData.append("location", data.location);
                formData.append("description", data.description);
                formData.append("file", data.file);

                console.log(data);

                try{
                    fetch('/posts/create', {
                        method: "POST",
                        body: formData
                    }).then(res => res.data)
                    .then(res => console.log("res of /posts/create api : ",res))
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
                                file: e.target.files[0].name
                            }
                        })
                    }} />
                </div>
                <div className="auth-loc-conatiner">
                    <input type="text" id="input-auth" value={data.author} placeholder="Author" onChange={(e)=>{
                        setData(data =>{
                            return {
                                ...data,
                                author: e.target.value
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
