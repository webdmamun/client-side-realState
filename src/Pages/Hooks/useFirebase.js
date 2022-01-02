import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";




// firebase init 
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);
    const [error,setError] = useState("");

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google sign in 
const signInWithGoogle = (location,navigate)=>{ 
    setIsLoading(false)
          signInWithPopup(auth, GoogleProvider)
          .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;    
          const user = result.user;  

          const destination = location?.state?.from || '/';
          navigate(destination);
  
  
  
          }).catch((error) => {    
          const errorCode = error.code;
          const errorMessage = error.message; 
          setError(errorMessage)
          })
          .finally(() => setIsLoading(true));
  }
  //   logout 
const logOut =() =>{
    setIsLoading(true);
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  }
  // Auth Observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user);
  
        const uid = user.uid; 
      }
      else{
        setUser({});
      }
      setIsLoading(false);
    });
  
  },[])

  // registration 
const registration = (email, password,navigate) =>{
    setIsLoading(false)
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {    
      const user = userCredential.user;

      navigate('/');
    })
    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)   
    })
    .finally(() => setIsLoading(true));
  }
  
  // Log in 
  
  const login = (email, password,location,navigate) =>{
    setIsLoading(false)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      navigate(destination);
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    })
    .finally(() => setIsLoading(true));
  }
  



    return (
        {
            user,
            signInWithGoogle,
            logOut,
            registration,
            login,
            admin,
            isLoading,
            error
        }
    );
};

export default useFirebase;