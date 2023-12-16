<script setup lang="ts">
defineOptions({
  name: "LayoutMenu",
})
</script>

<template>
  <a-layout-sider class="layout-menu">
    <a-menu
      :collapsed="false"
      :default-open-keys="['0']"
    >
      <a-menu-item key="1">
        模块菜单
      </a-menu-item>
      <a-menu-item key="2">
        用户管理
      </a-menu-item>
      <a-menu-item key="3">
        角色权限
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped lang="scss">
.layout-menu {
  background: #fff;
}
</style>
