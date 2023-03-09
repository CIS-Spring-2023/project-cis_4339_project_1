
import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      name: "",
      role:"",
      isLoggedIn: false,
      isViewer: false,
      isEditor: false,
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);
        this.$patch({
          isLoggedIn: response.isAllowed,
          name: response.name,
          role: response.role,
          isViewer: response.isViewer,
          isEditor: response.isEditor,
        })
        this.$router.push("/");
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

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {
  if (u === "vi" && p === "vi") return Promise.resolve({ isAllowed: true, name: "Peter Parker", isViewer: true });
  if (u === "ed" && p === "ed") return Promise.resolve({ isAllowed: true, name: "JJJ", isEditor: true, isViewer: true });
  if (p === "ed") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}

