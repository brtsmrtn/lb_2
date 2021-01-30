import firebase from "firebase";
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL:
    "https://link-biscuit-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MID,
};
firebase.initializeApp(config);
export const databaseRef = firebase.database().ref();
