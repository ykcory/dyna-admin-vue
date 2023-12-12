<script setup lang="ts">
import {ref} from "vue";
import {LoginParams} from "@/views/login/interface.ts";
import {loginHttp} from "@/views/login/apis.ts";
import {useRouter} from "vue-router";

defineOptions({
  name: "LoginPage"
})

const router = useRouter()

const loginForm = ref<LoginParams>({password: "", username: ""})

const loginFormRules = {
  username: {required: true, message: "请输入用户名"},
  password: {required: true, message: "请输入密码"}
}

const loginLoading = ref(false)

const handleSubmit = async () => {
  try {
    loginLoading.value = true
    const res = await loginHttp(loginForm.value)
    console.log(res,"res")
    if(res.success){
      localStorage.setItem("token", res.data)
      await router.push("/")
    }
  } finally {
    loginLoading.value = false
  }
}

</script>

<template>
  <div class="login-page w-screen h-screen">
    <div class="bg-white w-40% p-8% h-screen fixed right-0 flex flex-col flex-justify-center">
      <a-typography-title>🚀 欢迎登录</a-typography-title>
      <a-form :model="loginForm" :rules="loginFormRules" layout="vertical" size="large" @submit="handleSubmit">
        <a-form-item label="用户名" name="username" field="username">
          <a-input v-model.trim="loginForm.username" :max-length="20" placeholder="请输入用户名"/>
        </a-form-item>
        <a-form-item label="密码" name="password" field="password">
          <a-input-password v-model.trim="loginForm.password" :max-length="20" placeholder="请输入密码"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" long :loading="loginLoading">登 录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  background: url('./images/bg.jpg') no-repeat;
  background-size: cover;
}
</style>
