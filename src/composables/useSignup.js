import {ref} from 'vue'
import { FirebaseAuth } from '../firebase/config'

const error = ref(null)

const signUp = async(email, password, displayName) => {
    //Resets error value after each attempt
    error.value = null

    try{
       const res = await FirebaseAuth.createUserWithEmailAndPassword(email, password)
        
       if(!res){
            throw new Error('Could not complete signup.')
        }

        await res.user.updateProfile({displayName: displayName})
        error.value = null
        
        return res

    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {

    return {error, signUp}
}

export default useSignup