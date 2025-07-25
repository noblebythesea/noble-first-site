import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Homepage.vue";
import AboutPage from "../views/AboutPage.vue";
import MenuPage from "../views/MenuPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/menu", component: MenuPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
