import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJJp7yImQ-oTDQb_y4J2RZIVetCk6LMQk",
  authDomain: "projeto-elegancce.firebaseapp.com",
  projectId: "projeto-elegancce",
  storageBucket: "projeto-elegancce.appspot.com",
  messagingSenderId: "332239995072",
  appId: "1:332239995072:web:2d4a2658a6f2afbf64ad25",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


/* 
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID,
  appId: process.env.APP_ID,
}; */
