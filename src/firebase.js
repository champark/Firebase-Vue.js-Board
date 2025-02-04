// Firebase SDK에서 필요한 모듈 가져오기
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyDewOj65oAmSowGuySg0XkxGCm9xg5B9s0",
    authDomain: "fir-vuejsboard.firebaseapp.com",
    projectId: "fir-vuejsboard",
    storageBucket: "fir-vuejsboard.firebasestorage.app",
    messagingSenderId: "712059788877",
    appId: "1:712059788877:web:5cb6e771ca9bce69fcc604",
    measurementId: "G-LHQ158FH79"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Firestore Database 연결

export { db };
