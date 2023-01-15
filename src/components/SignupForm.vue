<template>
  <form @submit.prevent="signUp">
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        //Refs needed in the form
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const signUp = () => {
            console.log(displayName.value, email.value, password.value)

        }

        return{ displayName, email, password, signUp}
    }

}
</script>

<style>

</style>