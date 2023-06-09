<template>
  <div
    class="bg-scroll w-full min-h-screen font-sans bg-cover bg-no-repeat bg-center"
    style="background-image: url('/assets/background.png')"
    ref="fullScreenSize"
  >
    <div :style="`height: ${height}px; width: ${width}px`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const fullScreenSize = ref(null);
const { width, height } = useElementSize(fullScreenSize);
</script>
