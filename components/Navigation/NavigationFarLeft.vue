<template>
    <NuxtLink
        :to="'/' + props.to"
        class="fixed top-1/4 -left-300px h-1/2 w-200px rounded-10 bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group pyn-transition-1000"
        :style="viewTransitionName"
    >
        <div class="absolute top-1/2 left-1/4">
            <Icon
                name="bx:bxs-chevron-left"
                size="2rem"
                class="c-transparent pyn-transition-1000 group-hover:c-slate-1"
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
