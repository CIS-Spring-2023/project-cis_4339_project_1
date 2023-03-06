// login.vue 

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Hardcoded credentials for demonstration purposes only
      const validUsername = 'myusername'
      const validPassword = 'mypassword'

      if (this.username === validUsername && this.password === validPassword) {
        // If the credentials are valid, redirect the user to the dashboard page
        this.$router.push('/dashboard')
      } else {
        // If the credentials are not valid, show an error message
        alert('Invalid username or password')
      }
    }
  }
}
</script>