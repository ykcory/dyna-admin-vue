<script setup lang="ts">
defineOptions({
  name: "LayoutHeader",
})
</script>

<template>
  <a-layout-header class="layout-header">
    <div class="header-left"></div>
    <a-space size="large" class="header-right">
      <a-avatar size="large">
        A
      </a-avatar>
    </a-space>
  </a-layout-header>
</template>

<style scoped lang="scss">
@import "index";
</style>
