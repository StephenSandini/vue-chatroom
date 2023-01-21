import {ref} from 'vue'
import { FirebaseAuth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
    error.value = null
    try{
        await FirebaseAuth.signOut()
    }catch(err){
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout