/* eslint-disable no-const-assign */
/* eslint-disable no-unreachable */
export const createUser = function () {
    return { email: () => Promise.resolve(), password: () => Promise.resolve()}
}
export const signInWithEmailAndPassword = ( auth= {}, emailUser, passwordUser ) => Promise.resolve({user: {email:'correo@prueba.com'}})

export const useAuth = ( displayName, email , logOut ) => {
    //console.log('useHeader')
    return Promise.resolve({
    displayName, email,logOut});
}

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

export const loginWithGoogle = (email, password) => {
    console.log('loginWithGoogle')
    return Promise.resolve({
    user: {
        email: 'correo@gmail.com',
        password: '******',
    }
    })
}






