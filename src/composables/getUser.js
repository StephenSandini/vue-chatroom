import {ref} from 'vue'
import { FirebaseAuth } from '../firebase/config'

const user = ref(FirebaseAuth.currentUser)

FirebaseAuth.onAuthStateChanged(_user => {
    console.log('User state change. Current user is:', _user)
    user.value = _user
})

const getUser = () => {
    return {user}
}

export default getUser