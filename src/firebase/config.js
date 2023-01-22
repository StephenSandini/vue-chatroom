import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



firebase.initializeApp(firebaseConfig)

const FirebaseAuth = firebase.auth()
const FirebaseFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export{ FirebaseAuth, FirebaseFirestore, timestamp}