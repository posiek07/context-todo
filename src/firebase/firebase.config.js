import firebase from 'firebase'; 


const firebaseConfig = {
    apiKey: "AIzaSyD3xzvveSu_POZUl_VmGh2tKpxDtDcShPg",
    authDomain: "context-functional-todo.firebaseapp.com",
    databaseURL: "https://context-functional-todo.firebaseio.com",
    projectId: "context-functional-todo",
    storageBucket: "context-functional-todo.appspot.com",
    messagingSenderId: "117185959683",
    appId: "1:117185959683:web:3652c3cdfcfbff64d1fb36",
    measurementId: "G-2SM1VPFNRB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = firebase.firestore()
