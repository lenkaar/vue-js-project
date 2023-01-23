import home from "./components/home.vue";
import signUp from "./components/signUp.vue";
import logIn from "./components/login.vue";
import { createRouter, createWebHistory } from "vue-router";
import Add from "./components/add.vue";
import update from "./components/update.vue";
import menu from "./components/menu.vue";
import cart from "./components/cart.vue";

const routes = [
  {
    name: "home",
    component: home,
    path: "/home",
    meta:{
      isAuth:true 
    }
  },
  {
    name: "signUp",
    component: signUp,
    path: "/sign-up",
  },
  {
    name: "logIn",
    component: logIn,
    path: "/log-In",
  },
  {
    name: "Add",
    component: Add,
    path: "/add",
  },
  {
    name: "update",
    component: update,
    path: "/update/:id",
  },
  {
    name: "menu",
    component: menu,
    path: "/menu",
    meta:{
      isAuth:true 
    }
  },  
  {
    name: "cart",
    component: cart,
    path: "/cart",
    meta:{
      isAuth:true 
    }
 }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to,from,next) =>{
  let userLoggedIn =localStorage.getItem('user-info') 
  if (to.meta.isAuth && !userLoggedIn){
    next('/log-In');
  }else{
    next();
  }
})
export default router;
