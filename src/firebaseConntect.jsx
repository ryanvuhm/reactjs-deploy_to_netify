import firebase from "firebase/app";
import "firebase/auth";

import "firebase/firestore";

import "firebase/storage";


import { useDispatch } from "react-redux";
import { load } from "./features/Candidate/CandidateSlice";

import React from "react";
import PropTypes from "prop-types";

const firebaseConfig = {
  apiKey: "AIzaSyCtsDY8pubbme2ZZ4rFvzCqks5BGKSwXsk",
  authDomain: "presinexadmin.firebaseapp.com",
  databaseURL: "https://presinexadmin-default-rtdb.firebaseio.com",
  projectId: "presinexadmin",
  storageBucket: "presinexadmin.appspot.com",
  messagingSenderId: "678856896023",
  appId: "1:678856896023:web:14312f72ba2b63b39f3652",
  measurementId: "G-3Z05147N0M"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
// export const storage = firebase.storage();


// firebase.firestore().settings({ timestampsInSnapshots: true });

// export default {
//   db: db,
//   auth: auth
// };


export default firebase;