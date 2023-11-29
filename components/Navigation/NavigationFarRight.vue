<template>
    <NuxtLink
        :to="'/' + props.to"
        class="fixed top-1/4 -right-300px h-1/2 w-200px rounded-10 bg-dark-8 border-2 border-2"
        :style="viewTransitionName"
    >
        <div class="absolute top-1/2 right-1/4">
            <Icon name="bx:bxs-chevron-right" size="2rem" class="c-gray" />
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
