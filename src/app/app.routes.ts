import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import homeRoutes from "./home/home.routes";
import recognizeRoutes from "./recognize/recognize.routes";

const routes: RouteRecordRaw[] = [...homeRoutes, ...recognizeRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
