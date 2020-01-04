import { useState, useEffect } from 'react';

// Firebase setup
const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication(){
  const [authenticated, setAuthenticated] = useState('')

  function login(){
    auth.signInWithPopup(provider);
  }

  function logout(){
    auth.signOut()
    .then(function(){
      setAuthenticated('')
    })
    .catch(function(err){console.log(err)});
  }

  useEffect(() => {
    auth.onAuthStateChanged(function(user){
      if(user) {
        setAuthenticated(user)
      }
    }, function(error){
      console.log(error);
    })
  }, [])

  return {
    login,
    loggedIn: authenticated,
    logout
  }
}
