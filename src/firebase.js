import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDXZlxgG6_aS3jJ6qh1ZC8IZkphZ7ZjvS0",
    authDomain: "chit-chat-c8865.firebaseapp.com",
    projectId: "chit-chat-c8865",
    storageBucket: "chit-chat-c8865.appspot.com",
    messagingSenderId: "657669128464",
    appId: "1:657669128464:web:4f2d34232d28435c386595",
  })
  .auth();
