const BASE_URL = "http://localhost:3004/user"

function getUsers(){
    return fetch(BASE_URL)
            .then(res =>res.json())
}

export {
    getUsers
}