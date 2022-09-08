import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import cadastrarView from "../views/cadastrarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cadastrar/:option",
      name: "cadastrar",
      component: cadastrarView,
    },
  ],
});

export default router;
