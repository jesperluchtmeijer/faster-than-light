import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Game from "./components/Game.vue";


const routes = [
  { path: '/', component: Home },
    { path: '/game', component: Game },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')