
import { createApp, markRaw } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
const pinia = createPinia();
pinia.use(({ store }) => {
    store.$router = markRaw(router)
  });
const app = createApp(App)
app.use(pinia)
app.use(router);
app.mount('#app');
