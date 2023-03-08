<template>
  <div class="login-box">
    <h1>Login Form</h1>
    <form @submit.prevent="store.login(username, password)" novalidate="true">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" placeholder="Enter your username">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password">
      <button type="submit">Login</button>
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

<style>
.login-box {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: rgb(11, 10, 10);
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
button:hover {
  background-color: #910505;
}
</style>