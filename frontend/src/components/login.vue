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
      <form @submit.prevent="store.login(username, password)" novalidate="true">
        <!--grid container-->
        <div
          class="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        ></div>
        <!--form field-->
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Username</span>
            <span style="color: #ff0000"></span>
            <input
              type="text"
              id="username"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="username"
            >
          </label>
        </div>
        <div class="flex flex-col">
          <label class="block">
            <span class="text-gray-700">Password</span>
            <span style="color: #ff0000"></span>
            <input
              type="password"
              id="password"
              class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              v-model="password"
            >
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
import { useLoggedInUserStore } from '@/store/loginuser'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

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
      v$: useVuelidate( { $autoDirty: true }),
      store
    }
  },
  validations() {
    return {
      username: { required },
      password: { required }
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