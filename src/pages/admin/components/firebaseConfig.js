import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARhIHTDQ9KcnGvHGF2cUwR-cci4x5SbyY",
    authDomain: "food-app-f2704.firebaseapp.com",
    databaseURL: "https://food-app-f2704-default-rtdb.firebaseio.com/",
    projectId: "food-app-f2704",
    storageBucket: "food-app-f2704.appspot.com",
    messagingSenderId: "191508750142",
    appId: "1:191508750142:web:bbb5dbab7d3e4c6c32966f",
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
}

export default StartFirebase;
