<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- login.vue -->

<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Login
      </h1>
    </div>
    <div class="px-10 py20">
      <form @submit.prevent="login">
      <!--grid container-->
      <div 
        class="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        ></div>
      <!--form field-->
      <div class="flex flex-col">
        <label class="block">
          <span class="text-gray-700">Username</span>
          <span style="color: #ff0000">*</span>
            <input
              type="text"
              id="username"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="username"
          />
        </label>
      </div>
      <div class="flex flex-col">
        <label class="block">
          <span class="text-gray-700">Password</span>
          <span style="color: #ff0000">*</span>
            <input
              type="text"
              id="password"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            v-model="Password"
          />
        </label>

        <div class="flex justify-between mt-10 mr-20">
          <button class="bg-red-700 text-white rounded" type="submit">
            Login
          </button>
        </div>
      </div>
      
    </form>
    </div>
  </main>
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
