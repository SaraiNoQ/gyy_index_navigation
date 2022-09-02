import type { RouteRecordRaw } from "vue-router";
import { createRouter,  createWebHashHistory } from "vue-router";
import NProgress from "nprogress";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/static/home",
  },
  {
    path: "/static/404",
    name: "ErrorPage",
    component: () => import("~/views/errorPages/index.vue"),
  },
  {
    path: "/static/home",
    name: "Home",
    component: () => import("~/views/home/index.vue"),
  },
  {
    path: "/static/hero",
    name: "Hero",
    component: () => import("~/views/home/components/Hero.vue"),
  },
  {
    path: "/static/detail",
    name: "detail",
    component: () => import("~/views/home/components/StoreTest.vue"),
  },
  {
    path: "/static/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const index = createRouter({
  history: createWebHashHistory(),
  routes,
});
index.beforeEach(() => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

index.afterEach(() => {
  NProgress.done();
});

export default index;
