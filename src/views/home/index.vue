<script setup lang="ts">

defineOptions({
  name: 'HomePage'
})


</script>

<template>
  <div class="home-page bg-gray-100 flex">
    <div class="w-full h-screen">
      <router-view />
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>
