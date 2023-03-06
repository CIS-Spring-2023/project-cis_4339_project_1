// login.vue 

<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="password">
      <button type="submit">Login!</button>
    </form>
  </div>
</template>