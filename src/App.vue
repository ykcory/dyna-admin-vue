<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN"
</script>

<template>
  <a-app>
    <a-config-provider :locale="zhCN">
      <router-view />
    </a-config-provider>
  </a-app>
</template>
