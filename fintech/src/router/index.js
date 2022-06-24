import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockView from "../views/StockView.vue";
import BondView from "../views/BondView.vue";
import DepositView from "../views/DepositView.vue";
import AView from "../components/detail/AView.vue";
import BView from "../components/detail/BView.vue";
import CView from "../components/detail/CView.vue";
import DView from "../components/detail/DView.vue";
import EView from "../components/detail/EView.vue";
import LogInVue from "../components/LogInVue.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LogInVue,
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
  {
    path: "/a",
    name: "a",
    component: AView,
  },
  {
    path: "/b",
    name: "b",
    component: BView,
  },
  {
    path: "/c",
    name: "c",
    component: CView,
  },
  {
    path: "/d",
    name: "d",
    component: DView,
  },
  {
    path: "/e",
    name: "e",
    component: EView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
