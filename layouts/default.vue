<template>
    <div
        class="bg-scroll w-full min-h-screen font-sans bg-cover bg-no-repeat bg-center bg-dark-9"
        ref="fullScreenSize"
    >
        <div class="fixed top-0 right-0 w-100% h-100%">
            <slot />
        </div>
        <div class="fixed top-3 right-3">
            <NuxtLink to="mailto: peteryurkovich1@gmail.com">
                <Icon name="bxl:gmail" class="w-8 h-8 c-slate-1" />
            </NuxtLink>
        </div>
        <div class="fixed top-3 left-3">
            <NuxtLink to="/">
                <Icon name="fa6-solid:pen-nib" class="w-8 h-8 c-slate-1" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const fullScreenSize = ref(null);
const { width, height } = useElementSize(fullScreenSize);
</script>
