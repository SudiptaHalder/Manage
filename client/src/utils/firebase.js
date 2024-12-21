// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: "taskmanager-557d7.firebaseapp.com",
//   projectId: "taskmanager-557d7",
//   storageBucket: "taskmanager-557d7.appspot.com",
//   messagingSenderId: "824261215224",
//   appId: "1:824261215224:web:ba24631a12b4bf9d5e8c0d",
// };

// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-fc879.firebaseapp.com",
  projectId: "task-fc879",
  storageBucket: "task-fc879.firebasestorage.app",
  messagingSenderId: "504161019796",
  appId: "1:504161019796:web:1dd599c78fac7441489181",
  measurementId: "G-Q2RDM3Q1BT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
