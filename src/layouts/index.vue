<script setup lang="ts">
import LayoutModule from "@/layouts/components/module/index.vue";
import LayoutHeader from "@/layouts/components/header/index.vue";
import LayoutMenu from "@/layouts/components/menu/index.vue";

defineOptions({
  name: "FrameLayout"
})
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider style="width: 80px">
      <layout-module />
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <layout-header />
      </a-layout-header>
      <a-layout>
        <a-layout-sider style="width: 206px; margin-left: 1px;">
          <layout-menu />
        </a-layout-sider>
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
  .layout-page-wrap{
    height: 100%;
    padding: 15px 0 0 15px;
    background: var(--color-fill-1);
    .layout-page{
      height: 100%;
      padding: 15px;
      overflow: auto;
      background: var(--color-bg-1);
    }
  }
}
</style>
