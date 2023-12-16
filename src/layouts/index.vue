<script setup lang="ts">
import LayoutModule from "@/layouts/components/module/index.vue"
import LayoutHeader from "@/layouts/components/header/index.vue"
import LayoutMenu from "@/layouts/components/menu/index.vue"

defineOptions({
  name: "FrameLayout",
})
</script>

<template>
  <a-layout class="layout">
    <layout-module />
    <a-layout>
      <layout-header />
      <a-layout>
        <layout-menu />
        <a-layout-content>
          <div class="layout-page-wrap">
            <div class="layout-page">
              <router-view />
            </div>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  .layout-page-wrap {
    height: 100%;
    padding: 15px 0 0 15px;
    .layout-page {
      height: 100%;
      padding: 40px;
      overflow: auto;
      background: #fff;
    }
  }
}
</style>
