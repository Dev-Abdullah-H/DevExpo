import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard/:userId',
      name: 'home',
      component: () => import("../views/Home.vue"),
      meta: { requiresAuth: true }
    },
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
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});


// Authentication

router.beforeEach((to, from, next) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (userData) next()
    else next('/login')
  } else next()
 
});

export default router;
