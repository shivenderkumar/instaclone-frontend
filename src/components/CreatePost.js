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
    })

    return (
        <div className="form-container">
            <form  onSubmit={(e)=>{
                e.preventDefault()
                if(isDataEmpty(data)){
                    alert("fill all details")
                    return
                }
                console.log(data);
                console.log(e.target.files);
            }}> 
                <div>
                    <input type="file" id="inputChooseFile" placeholder="No file chosen" />
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
