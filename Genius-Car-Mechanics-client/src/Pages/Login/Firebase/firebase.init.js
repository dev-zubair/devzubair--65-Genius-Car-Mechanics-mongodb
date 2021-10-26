import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.js";

const initializetionAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializetionAuthentication;