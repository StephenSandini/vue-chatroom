import {ref} from 'vue'
import { FirebaseFirestore } from '../firebase/config.js'

const useCollection = (collection) => {
    //Since we will be using multiple collections, creating errors for each one
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null

        try{
            await FirebaseFirestore.collection(collection).add(doc)
        } catch (err) {
            console.log(err.message)
            error.value = 'Could not send the message'
        }
        error.value = null
    }

    return {error, addDoc}

}

export default useCollection