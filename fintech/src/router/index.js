import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockView from "../views/StockView.vue";
import BondView from "../views/BondView.vue";
import DepositView from "../views/DepositView.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    
  },
  {
    path: "/stock",
    name: "stock",
    component: StockView,
  },
  {
    path: "/bond",
    name: "bond",
    component: BondView,
  },
  {
    path: "/deposit",
    name: "deposit",
    component: DepositView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
