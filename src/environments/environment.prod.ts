import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3RzMHt7WwIlGz-rTtRAsGrKXARV3pTmo",
  authDomain: "skedst-ba24d.firebaseapp.com",
  projectId: "skedst-ba24d",
  storageBucket: "skedst-ba24d.appspot.com",
  messagingSenderId: "1068960407506",
  appId: "1:1068960407506:web:03d20ff4e7e83e40c2720b",
  measurementId: "G-5C9FDE7670"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: true,
  firebaseConfig: firebaseConfig // Asegúrate de incluir firebaseConfig aquí
};
