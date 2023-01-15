<template>
  <form @submit.prevent="logIn">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        //Refs needed in the form
        const email = ref('')
        const password = ref('')

        const logIn = () => {
            console.log( email.value, password.value)

        }

        return{ email, password, logIn}
    }

}
</script>

<style>

</style>