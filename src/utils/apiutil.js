const BASE_URL = "http://localhost:8080"

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