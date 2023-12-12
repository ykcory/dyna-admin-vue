<script setup lang="ts">
defineOptions({
  name: "LayoutHeader"
})
</script>

<template>
<div class="header-wrap">
  <div class="header-left">
    <a-typography-title :heading="5" class="header-title">
      设置
    </a-typography-title>
    <a-breadcrumb>
      <a-breadcrumb-item>设置</a-breadcrumb-item>
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
  <a-space size="large" class="header-right">
    <a-dropdown>
      <a-avatar>A</a-avatar>
      <template #content>
        <a-doption>退出登录</a-doption>
      </template>
    </a-dropdown>
  </a-space>
</div>
</template>

<style scoped lang="scss">
@import "index";
</style>
