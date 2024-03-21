import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export function getData () {

  const firebaseConfig = {
    apiKey: "AIzaSyCHzba5ltJuwEmMgwtw31cS0K5mX7nut-o",
    authDomain: "monitoring-system-87637.firebaseapp.com",
    projectId: "monitoring-system-87637",
    storageBucket: "monitoring-system-87637.appspot.com",
    messagingSenderId: "333822390815",
    appId: "1:333822390815:web:007db585f107d09e149b2a",
    measurementId: "G-BTXD7M76SR"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  return db
}