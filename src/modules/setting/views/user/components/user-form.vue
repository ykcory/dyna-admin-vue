<script setup lang="ts">
import { ref } from "vue"

const open = ref(false)

const showModal = () => {
  open.value = true
}

const userForm = ref({
  id: null,
  username: null,
  realname: null,
  phone: null,
  email: null,
  status: null,
})

const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  realname: [
    {
      required: true,
      message: "请输入姓名",
    },
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
    },
  ],
  email: [
    {
      required: true,
      message: "请输入邮箱",
    },
  ],
  status: [
    {
      required: true,
      message: "请选择状态",
    },
  ],
}

defineExpose({ showModal })
</script>

<template>
  <a-modal v-model:open="open" title="新增用户" :mask-closable="false">
    <a-form :rules="rules" :label-col="{ span: 4 }" :wrapper-col="{ span: 19 }">
      <a-form-item label="用户名">
        <a-input v-model:value="userForm.username" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item label="姓名">
        <a-input v-model:value="userForm.realname" placeholder="请输入姓名" />
      </a-form-item>
      <a-form-item label="手机号">
        <a-input v-model:value="userForm.phone" placeholder="请输入手机号" />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input v-model:value="userForm.email" placeholder="请输入邮箱" />
      </a-form-item>
      <a-form-item label="状态">
        <a-radio-group v-model:value="userForm.status">
          <a-radio-button value="1">启用</a-radio-button>
          <a-radio-button value="0">禁用</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<style scoped lang="scss"></style>
