/* eslint-disable no-unreachable */
export const createUser = function () {
    return { email: () => Promise.resolve(), password: () => Promise.resolve()}
}

export const signInWithEmailAndPassword = ( auth = {}, emailUser, passwordUser ) => Promise.resolve( { user: emailUser, password: passwordUser} , Promise.reject({error: 'no hay usuario'}))

export const useAuth = function () {
    return { login: () => Promise.resolve(), loginWithGoogle: () => Promise.resolve()}
}

export const logOut = function () {
    return { signOut: () => Promise.resolve() }
}

export function AuthProvider({ children }) {
    return <>{ children }</>
}

export const navigate = function( {useNavigate}) {
    return <>{ useNavigate }</>
}






