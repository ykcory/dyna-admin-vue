<script setup lang="ts">
import {SettingOne} from "@icon-park/vue-next";
defineOptions({
  name: 'LayoutModule'
})
</script>

<template>
  <div class="layout-module">
    <div class="logo"></div>
    <ul class="module-list">
      <li>
        <div class="module-icon">
          <setting-one theme="outline" size="30" fill="#333"/>
        </div>
        <a-typography-paragraph ellipsis class="module-name">设置</a-typography-paragraph>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "index";
</style>
