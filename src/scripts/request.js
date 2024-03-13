/* ------------------------------- Const globais ------------------------------- */

const token = localStorage.getItem('@petinfo:token')
const baseUrl = 'http://localhost:3333'
const requestHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}
const loginUserRequest = {
    'Content-Type': 'application/json',
}

/* ------------------------------- Login request ------------------------------- */


export async function loginRequest(loginBody){
    const token = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: loginUserRequest,
        body: JSON.stringify(loginBody)
    })
    .then((response) => {
        if(response.ok) {
            const responseJson = response.json()
            .then(({token}) => {
                localStorage.setItem('@petinfo:token', JSON.stringify(token))
                
                return token
            })
            return responseJson
        } else {
            response.json()
            .then((resError) => console.log(resError))
        }
    })
}

/* ------------------------------- Register request ------------------------------- */


export async function registerRequest(registerBody){
    const newUser = await fetch(`${baseUrl}/users/create`, {
        method: 'POST',
        headers: loginUserRequest,
        body: JSON.stringify(registerBody)
    })
    .then(response => {
        if(response.ok){
            return response.json
        } else {
            response.json()
            .then(resError => console.log(resError))
        }
    })
    return newUser
}

export async function userRequests(){
    const user = await fetch (`${baseUrl}/users/profile`, {
        method: 'GET',
        headers: requestHeaders,
    })
    .then(response => {
        if(response.ok){
            const userJson = response.json()
            .then(resJson => {
                localStorage.setItem('@petInfo:user', JSON.stringify(resJson))
            })
        }
    })
}