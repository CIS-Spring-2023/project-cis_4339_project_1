
<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
import { useLoggedInUserStore } from "@/store/loginuser";

export default {
  name: 'App',
  data() {
    return {
      orgName: 'CIS 4339 GROUP 1'
    }
  },
  setup() {
    const user = useLoggedInUserStore();
    return { user };
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      this.orgName = res.data.name
    })
  }
}
</script>
<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <li>
              <router-link to="/login" v-if="!user.isLoggedIn">
                <span
                style="position: relative; top:6px"
                class="material-icons"
                >login</span>
                
                Login Page
              </router-link>
            </li>
            <li class="nav-item dropdown" v-if="user.isLoggedIn">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarUserMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >
              <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >account_circle</span>
              <i class="bi bi-person-fill" style="font-size: 1rem; color: hsla(160, 100%, 37%, 1)"></i> Welcome, {{ user.name }}
            </a>
          </li>
            <li>
              <router-link to="/">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <li v-if = "user.isEditor">
              <router-link to="/intakeform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <li v-if = "user.isEditor">
              <router-link to="/eventform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <li v-if = "user.isEditor">
              <router-link to="/viewservices">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >add</span
                >
                Add Services
              </router-link>
            </li>
            <li v-if = "user.isViewer">
              <router-link to="/findservices">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >format_list_bulleted</span
                >
                List of Services
              </router-link>
            </li>
            <li v-if = "user.isViewer">
              <router-link to="/findclient">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <li v-if = "user.isViewer">
              <router-link to="/findevents">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
            <li v-if = "user.isLoggedIn">
              <br>
                <a href="">
                    <span
                    @click = "store.logout()" class="nav-link"><i style="position: relative; top: 6px"
                    class="material-icons">logout</i>
                    </span> Logout 
                </a>
            </li>
            <li class="nav-item" v-if="!user.isLoggedIn">
            <router-link class="nav-link" to="/login">
              <span
                  style="position: relative; top:6px"
                  class="material-icons"
                  ></span
                >
                </router-link>
          </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 18px;
}
</style>
