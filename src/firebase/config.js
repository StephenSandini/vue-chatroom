import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDPtYlEb_cK2NW2_cMtuaeYepRsEikbe7I",
    authDomain: "vue-lobo-blog-project.firebaseapp.com",
    projectId: "vue-lobo-blog-project",
    storageBucket: "vue-lobo-blog-project.appspot.com",
    messagingSenderId: "209390225238",
    appId: "1:209390225238:web:bcb21326155af07596f8f7",
    measurementId: "G-GDL548CM6Q"
};

firebase.initializeApp(firebaseConfig)

const FirebaseAuth = firebase.auth()
const FirebaseFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export{ FirebaseAuth, FirebaseFirestore, timestamp}