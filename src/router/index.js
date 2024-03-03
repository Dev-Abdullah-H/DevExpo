import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/signup2",
      name: "signup2",
      component: () => import("../views/SignUp2.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogIn.vue"),
    },
  ],
});

export default router;
