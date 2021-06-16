import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import homeRoutes from "./home/home.routes";

const routes: RouteRecordRaw[] = [...homeRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
