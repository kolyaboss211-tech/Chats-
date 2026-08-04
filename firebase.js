
const firebaseConfig = {
  apiKey: "ВСТАВЬ_API_KEY",
  authDomain: "ВСТАВЬ_AUTH_DOMAIN",
  projectId: "ВСТАВЬ_PROJECT_ID",
  storageBucket: "ВСТАВЬ_STORAGE_BUCKET",
  messagingSenderId: "ВСТАВЬ_MESSAGING_SENDER_ID",
  appId: "ВСТАВЬ_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
