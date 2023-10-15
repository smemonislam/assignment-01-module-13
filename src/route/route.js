import { createRouter,createWebHistory } from 'vue-router'
import ReusableComponentList from "../pages/ReusableComponentList.vue"
import Home from "../pages/Home.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/component-list", component: ReusableComponentList },
]

const router = createRouter({
  history:createWebHistory(),
  routes,
  linkActiveClass:"active-menu",
})

export default router