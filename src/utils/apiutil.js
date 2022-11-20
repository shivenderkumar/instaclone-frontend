//const BASE_URL = process.env.development.BASE_URL
import dotenv from 'dotenv';
dotenv.config()
const BASE_URL = process.env.BASE_URL

function loadAllPosts() {
    return fetch(BASE_URL + '/posts/')
        .then(res => res.json())
}

function createPost(formData) {
    return fetch(BASE_URL +'/posts/create', {
        method: 'POST',
        body: formData
    }).then(res => res.data)
}

export {
    loadAllPosts,
    createPost
}