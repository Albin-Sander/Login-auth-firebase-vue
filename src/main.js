import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjlPCcq2WkOp5Ta8EC2wVGl4dTQiaNeVg",
  authDomain: "test-vuejs-a7b77.firebaseapp.com",
  projectId: "test-vuejs-a7b77",
  storageBucket: "test-vuejs-a7b77.appspot.com",
  messagingSenderId: "1040758336413",
  appId: "1:1040758336413:web:ab6f4904f0c94d74989d74",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

  db.collection('movies').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.data().name)
    })
  })

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = createApp(App).use(store).use(router).mount("#app");
  }
});
