/* eslint-disable no-unreachable */
export const createUser = function () {
    return { email: () => Promise.resolve(), password: () => Promise.resolve()}
}
export const signInWithEmailAndPassword = ( auth= {}, emailUser, passwordUser ) => Promise.resolve({user: {email:'correo@prueba.com'}})

/*export const useAuth = function () {
    return {
        login: () => Promise.resolve(),
        loginWithGoogle: () => Promise.resolve(),
    }
} */

export function AuthProvider({ children }) {
    return <>{ children }</>
}

export const navigate = function( {useNavigate}) {
    return <>{ useNavigate }</>
}

export const login = (email, password) => Promise.resolve({
    user: {
        email: 'correo@gmail.com',
        password: '******',
    }
})







