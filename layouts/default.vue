<template>
  <div
    class="bg-scroll w-full min-h-screen font-sans bg-cover bg-no-repeat bg-center"
    style="background-image: url('/assets/background.png')"
    ref="fullScreenSize"
  >
    <div :style="`height: ${height}px; width: ${width}px`">
      <slot />
    </div>
    <div class="fixed top-3 right-3">
      <NuxtLink to="mailto: peteryurkovich1@gmail.com">
        <Icon name="bxl:gmail" class="w-8 h-8 c-slate-1" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const fullScreenSize = ref(null);
const { width, height } = useElementSize(fullScreenSize);
</script>
