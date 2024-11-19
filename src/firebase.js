import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBgf4ncIZ0u_EU6bAPaxjx-lZDIng70sIU",
    authDomain: "edumagotchi-43726.firebaseapp.com",
    projectId: "edumagotchi-43726",
    storageBucket: "edumagotchi-43726.firebasestorage.app",
    messagingSenderId: "143984664846",
    appId: "1:143984664846:web:e907d7078fc63240e9775f",
    measurementId: "G-MN7GXP5HZL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

