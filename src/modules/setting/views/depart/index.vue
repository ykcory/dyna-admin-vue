<script setup lang="ts">
import {ref} from "vue";

defineOptions({
  name: "RolePage"
})

const columns = [
  {
    title: "部门名称",
    dataIndex: "deptName"
  }
]

const data = ref([
  {
    id: 1,
    deptName: "部门1",
    children: [
      {
        id: 2,
        deptName: "部门2"
      }
    ],
  },
  {
    id: 3,
    deptName: "部门3",
    children: [
      {
        id: 4,
        deptName: "部门4"
      }
    ]
  }
])
</script>

<template>
  <div>
    <a-table :columns="columns" :data="data" :draggable="{type:'handle'}" row-key="id" :pagination="false"/>
  </div>
</template>

<style scoped lang="scss"></style>
