<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="store.login(username, password)" novalidate="true">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-danger mt-3">Log in</button>
    </form>
  </div>
</template>



<script>
import { useLoggedInUserStore } from '@/store/loginuser'

export default {
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  setup() {
    const store = useLoggedInUserStore()
    return {
      // you can return the whole store instance to use it in the template
      store
    }
  }
}
</script>
