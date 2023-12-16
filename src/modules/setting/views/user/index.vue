<script setup lang="ts">
import { ref } from "vue"
import UserForm from "./components/user-form.vue"

defineOptions({
  name: "UserPage",
})

const searchForm = ref({
  username: "",
  realname: "",
})

const columns = [
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "姓名",
    dataIndex: "realname",
  },
  {
    title: "手机号",
    dataIndex: "phone",
  },
]

const dataSource = [
  {
    key: "1",
    realname: "张三",
    phone: "13000000000",
  },
]

const userFormRef = ref<InstanceType<typeof UserForm>>()

const handleShowAddModal = () => {
  userFormRef.value?.showModal()
}
</script>

<template>
  <div>
    <a-form :model="searchForm">
      <a-row :gutter="20">
        <a-col :span="6">
          <a-form-item label="用户名">
            <a-input
              v-model.trim="searchForm.username"
              placeholder="请输入用户名"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="姓名">
            <a-input
              v-model.trim="searchForm.realname"
              placeholder="请输入姓名"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item>
            <a-space>
              <a-button type="primary">查询</a-button>
              <a-button>重置</a-button>
            </a-space>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-space>
      <a-button type="primary" @click="handleShowAddModal">新增</a-button>
    </a-space>
    <a-table :columns="columns" :dataSource="dataSource" />
    <user-form ref="userFormRef" />
  </div>
</template>

<style scoped lang="scss"></style>
