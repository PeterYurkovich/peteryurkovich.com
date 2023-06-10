<template>
  <NuxtLink
    :to="'/' + props.to"
    class="fixed top-1/8 -right-100px h-3/4 w-200px rounded-10 backdrop-blur-3xl bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group transition duration-1000 ease-in-out"
    :style="viewTransitionName"
  >
    <div class="absolute top-1/2 left-1/6">
      <Icon
        name="bx:bxs-chevron-right"
        size="2rem"
        class="c-transparent transition duration-1000 ease-in-out group-hover:c-slate-1"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  view: {
    type: String,
    default: "",
  },
});

const viewTransitionName = computed(() => {
  return `view-transition-name: ${
    props.view != "" ? props.view : props.to
  }; contain: layout;`;
});
</script>
