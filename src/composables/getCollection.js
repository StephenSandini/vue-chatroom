import {ref} from 'vue'
import { FirebaseFirestore } from '../firebase/config.js'

const getCollection = (collection) => {
    //The error is located within the function to be more modular
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = FirebaseFirestore.collection(collection)
        .orderBy('createdAt')

    collectionRef.onSnapshot(snap => {
        let results = []
        snap.docs.forEach(doc =>{
            doc.data().createdAt && results.push({...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })

    return {documents, error}
}

export default getCollection