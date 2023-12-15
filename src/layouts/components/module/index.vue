<script setup lang="ts">
import { SettingOne } from "@icon-park/vue-next"
defineOptions({
  name: "LayoutModule",
})
</script>

<template>
  <a-layout-sider class="layout-module" width="80">
    <div class="logo"></div>
    <ul class="module-list">
      <li>
        <div class="module-icon">
          <setting-one theme="outline" size="30" fill="#333" />
        </div>
        <a-typography-paragraph class="module-name">
          设置
        </a-typography-paragraph>
      </li>
    </ul>
  </a-layout-sider>
</template>

<style scoped lang="scss">
@import "index";
</style>
