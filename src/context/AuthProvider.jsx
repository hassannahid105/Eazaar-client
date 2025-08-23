import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../hooks/axios/useAxiosPublic";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  //?create a new account by passing the new user's email address and password
  const createUser = (email, password) => {
    console.log(email, password);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ?   existing users to sign in using their email address and password.
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ?  sign out a user, call
  const logOut = () => {
    signOut(auth);
  };
  // ? Update a user's profile
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   ? Set an authentication state observer and get user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // console.log(user);
      setUser(user);
      //!  user data save in database
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        const userSave = await axiosPublic.post("/users", userInfo);
        console.log(userSave);
      }

      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth, axiosPublic]);
  const authInfo = {
    user,
    loading,
    auth,
    createUser,
    signIn,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
