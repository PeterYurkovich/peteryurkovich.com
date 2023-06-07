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
    <div>
      <MUINavBar>
        <MUINavBarSelection to="/">
          <template #icon="iconProps">
            <div
              class="flex flex-row justify-center rounded-lg w-16"
              :class="
                iconProps.active
                  ? 'bg-primaryContainer'
                  : 'group-hover:bg-inversePrimary'
              "
              style="transition: background-color"
            >
              <Icon
                name="ic:baseline-home"
                size="1.25em"
                :class="
                  iconProps.active
                    ? 'c-onPrimaryContainer'
                    : 'c-inversePrimary group-hover:c-onPrimaryContainer'
                "
              />
            </div>
          </template>
          <template #label> About </template>
        </MUINavBarSelection>
        <MUINavBarSelection to="/resume">
          <template #icon="iconProps">
            <div
              class="flex flex-row justify-center rounded-lg w-16"
              :class="
                iconProps.active
                  ? 'bg-primaryContainer'
                  : 'group-hover:bg-inversePrimary'
              "
              style="transition: background-color"
            >
              <Icon
                name="ic:baseline-description"
                size="1.25em"
                :class="
                  iconProps.active
                    ? 'c-onPrimaryContainer'
                    : 'c-inversePrimary group-hover:c-onPrimaryContainer'
                "
              />
            </div>
          </template>
          <template #label> Resume </template>
        </MUINavBarSelection>
        <MUINavBarSelection to="/projects">
          <template #icon="iconProps">
            <div
              class="flex flex-row justify-center rounded-lg w-16"
              :class="
                iconProps.active
                  ? 'bg-primaryContainer'
                  : 'group-hover:bg-inversePrimary'
              "
              style="transition: background-color"
            >
              <Icon
                name="ic:baseline-description"
                size="1.25em"
                :class="
                  iconProps.active
                    ? 'c-onPrimaryContainer'
                    : 'c-inversePrimary group-hover:c-onPrimaryContainer'
                "
              />
            </div>
          </template>
          <template #label> Projects </template>
        </MUINavBarSelection>
      </MUINavBar>
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
