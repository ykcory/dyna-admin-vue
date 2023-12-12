import type {RouteRecordRaw} from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/setting/user",
    name: "user",
    component: () => import("@/modules/setting/views/user/index.vue")
  }
]
