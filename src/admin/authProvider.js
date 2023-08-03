import {AuthProvider} from 'react-admin'

export const authProvider = {
    // called when the user attempts to log in
    login: async ({username: login, password}) => {
        const res = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login, password})
        })
        const json = await res.json()
        if (json && res.status === 200) {
            localStorage.setItem('username', json)
            return Promise.resolve()
        } else if (res.status === 401) {
            return Promise.reject(new Error(json.error))
        }
        // accept all username/password combinations
        // return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username')
        return Promise.resolve()
    },
    // called when the API returns an error
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username')
            return Promise.reject()
        }
        return Promise.resolve()
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject()
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
}
