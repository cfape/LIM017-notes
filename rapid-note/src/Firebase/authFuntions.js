import { createUser } from "../Firebase/firebaseConfig";

export const registerWithEmail = (email, password) => {
  return createUser(email, password)
    .then((userCredential) => {
      // Signed in
    const user = userCredential.user;
    sessionStorage.setItem("uid", user.uid);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode);
    console.log(errorMessage);
    });
};
