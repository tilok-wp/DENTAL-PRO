// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsqh5bFzLATFEzOcLSA5UEmvg4SJ2nH6o",
    authDomain: "dentipro-assinment10.firebaseapp.com",
    projectId: "dentipro-assinment10",
    storageBucket: "dentipro-assinment10.appspot.com",
    messagingSenderId: "33616120694",
    appId: "1:33616120694:web:6552338b424474d80c4857"
};

// Initial Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);



export default auth;
