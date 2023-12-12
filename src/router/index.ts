import {createRouter, createWebHistory, NavigationGuardNext} from "vue-router";
import type {RouteRecordRaw} from "vue-router";
import {routes as settingRoutes} from '@/modules/setting/router/index.ts'
import {isLoginHttp} from "@/apis/auth.api.ts";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/home/index.vue"),
      },
      ...settingRoutes
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

const isLogin = async (next: NavigationGuardNext) => {
  try {
    const res = await isLoginHttp()
    if (res.success) {
      next()
    } else {
      next('/login')
    }
    return
  } catch {
    next('/login')
  }
}

router.beforeEach((to, _, next) => {
  if (to.path !== '/login') {
    isLogin(next).then()
  } else {
    next()
  }
})

export default router
