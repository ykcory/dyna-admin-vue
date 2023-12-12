<script setup lang="ts">
import {ref} from "vue";
import {TableData} from "@arco-design/web-vue";

defineOptions({
  name: "UserPage"
})

const searchForm = ref({
  username: '',
  realname: '',
})

const columns = [
  {
    title: "用户名",
    dataIndex: "username"
  },
  {
    title: "姓名",
    dataIndex: "realname"
  },
  {
    title: "手机号",
    dataIndex: "phone"
  }
]

const dataSource: TableData[] = []

</script>

<template>
  <div>
    <a-form :model="searchForm">
      <a-row :gutter="20">
        <a-col :span="6">
          <a-form-item label="用户名">
            <a-input v-model.trim="searchForm.username" placeholder="请输入用户名"/>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="姓名">
            <a-input v-model.trim="searchForm.realname" placeholder="请输入姓名"/>
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
    <a-table :columns="columns" :data="dataSource"/>
  </div>
</template>

<style scoped lang="scss">

</style>
