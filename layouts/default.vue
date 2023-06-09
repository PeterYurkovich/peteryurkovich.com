<template>
  <div
    class="bg-scroll w-full min-h-screen font-sans bg-cover bg-no-repeat bg-center"
    style="background-image: url('/assets/background.png')"
    ref="fullScreenSize"
  >
    <div
      :style="`height: ${containerSize.height}px; width: ${containerSize.width}px`"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const fullScreenSize = ref(null);
const { width, height } = useElementSize(fullScreenSize);
const containerSize = computed(() => {
  return {
    width: width.value,
    height: height.value - 90,
  };
});
</script>
