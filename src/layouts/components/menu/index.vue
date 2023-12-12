<script setup lang="ts">

defineOptions({
  name: "LayoutMenu"
})

</script>

<template>
  <a-menu
      :style="{ width: '200px', borderRadius: '4px' }"
      :collapsed="false"
      :default-open-keys="['0']"
  >
    <a-menu-item key="1">
      <template #icon><icon-menu /></template>
      模块菜单
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon><icon-user /></template>
      用户管理
    </a-menu-item>
    <a-menu-item key="3">
      <template #icon><icon-lock /></template>
      角色权限
    </a-menu-item>
  </a-menu>
</template>

<style scoped lang="scss">

</style>
