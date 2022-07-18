
export const createUser = function () {
  return { email: () => Promise.resolve(), password: () => Promise.resolve() };
};

export const useAuth = () => {
  return {
    user:    {
      displayName: 'Carmen PG',
      email: 'correo@gmail.com',
    },
    logOut: () => {}
  }}

/*export function AuthProvider({ children }) {
  return <>{children}</>;
}*/

export const navigate = function ({ useNavigate }) {
  return <>{useNavigate}</>;
};

export const login = (email, password) =>
  Promise.resolve({
    user: {
      email: "correo@gmail.com",
      password: "******",
    },
  });

export const loginWithGoogle = (email, password) => {
  return Promise.resolve({
    user: {
      email: "correo@gmail.com",
      password: "******",
    },
  });
};

export const signUp = (email, password) => {
  return Promise.resolve({
    user: {
      email: "correo@gmail.com",
      password: "******",
    },
  });
};
