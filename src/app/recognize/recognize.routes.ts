import { RouteRecordRaw } from "vue-router";

const recognizeRoutes: RouteRecordRaw[] = [
  {
    path: "/recognize",
    name: "Recognize",
    component: () =>
      import(/* webpackChunkName: "recognize" */ "./recognize.component"),
  },
];

export default recognizeRoutes;
