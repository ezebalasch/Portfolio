import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCY5vWVLS95AyAzTlrGTXjDQ9MhWJo0rVg",
  authDomain: "portfolio-ezeb.firebaseapp.com",
  projectId: "portfolio-ezeb",
  storageBucket: "portfolio-ezeb.appspot.com",
  messagingSenderId: "775014833641",
  appId: "1:775014833641:web:91f4b157ee956cb432bf78",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
