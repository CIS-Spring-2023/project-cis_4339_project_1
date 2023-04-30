import { defineStore } from 'pinia'
import axios from 'axios'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      username: "",
      role:"",
      isLoggedIn: false,
      isEditor: false,
      isViewer: false
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post('http://localhost:3000/users', {username: username, password: password});
        this.$patch({
          isLoggedIn: true,
          username: response.data.name,
          role: response.data.role,
          isEditor: this.isEditor,
          isViewer: this.isViewer
        })
        this.$router.push("/");
        return true;
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        name: "",
        isLoggedIn: false
      }); 
      // trying to redirect user to dashboard 
      this.$router.push("/");
    }
  }
});