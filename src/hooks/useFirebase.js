import initializeAuthentication from "../Pages/Registration/firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, allErrors] = useState("");
  // const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  const registerUser = (data, navigation) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const newUser = { email: data.email, display: data.firstName };
        setUser(newUser);
        saveUsers(data, navigation);
        // console.log(data);
      })
      .catch((error) => {
        allErrors(error.message);
      })
      .finally(() => setLoading(false));
  };

  const userSignIn = (data, location, navigation) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigation(destination);
      })
      .catch((error) => {
        allErrors(error.message);
      })
      .finally(() => setLoading(false));
  };

  //save data in  database.
  const saveUsers = (data, navigation) => {
    console.log(data);
      axios.post('http://localhost:9000/allregistration', data)
      .then(res => {
          // console.log(res);
          if (res.data.insertedId) {
              alert('SignUp succefully');
              navigation("/");
          }
      });
  }

  const userSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // console.log('signOut successfully');
      })
      .catch((error) => {
        allErrors(error.message);
      })
      .finally(() => setLoading(false));
  };

  //observe user present
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    loading,
    error,
    user,
    registerUser,
    userSignIn,
    userSignOut,
  };
};

export default useFirebase;
