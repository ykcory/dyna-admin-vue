<script setup lang="ts">
import { ref } from "vue"
import { LoginParams } from "@/views/login/interface.ts"
import { loginHttp } from "@/views/login/apis.ts"
import { useRouter } from "vue-router"
import type { FormInstance } from "ant-design-vue"

defineOptions({
  name: "LoginPage",
})

const router = useRouter()

const formRef = ref<FormInstance>()

const loginForm = ref<LoginParams>({ password: "", username: "" })

const loginFormRules = {
  username: [{ required: true, message: "请输入用户名" }],
  password: [{ required: true, message: "请输入密码" }],
}

const loginLoading = ref(false)

const handleSubmit = async () => {
  console.log(formRef, "formRef")

  const valid = await formRef.value?.validate()

  if (!valid) return
  try {
    loginLoading.value = true
    const res = await loginHttp(loginForm.value)
    if (res.success) {
      localStorage.setItem("token", res.data)
      await router.push("/")
    }
  } finally {
    loginLoading.value = false
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-form-warp">
      <a-typography-title>🚀 欢迎登录</a-typography-title>
      <a-form
        ref="formRef"
        :model="loginForm"
        :rules="loginFormRules"
        layout="vertical"
        size="large"
        @finish="handleSubmit"
      >
        <a-form-item label="用户名" name="username">
          <a-input
            v-model:value.trim="loginForm.username"
            :max-length="16"
            placeholder="请输入用户名"
          />
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input-password
            v-model:value.trim="loginForm.password"
            :max-length="16"
            placeholder="请输入密码"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>登 录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  background: url("./images/bg.jpg") no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  .login-form-warp {
    background: #fff;
    position: fixed;
    right: 0;
    height: 100vh;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
}
</style>
