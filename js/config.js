const firebaseConfig = {
  apiKey: "AIzaSyDtEilmw3Yk_0wYqa9Z-AaoaGWloD42Blo",
  authDomain: "fucking-kill-me-already.firebaseapp.com",
  projectId: "fucking-kill-me-already",
  storageBucket: "fucking-kill-me-already.appspot.com",
  messagingSenderId: "507587314334",
  appId: "1:507587314334:web:f508fdc233d8cd0f09f18f",
  measurementId: "G-MTGLT8YJ25",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
