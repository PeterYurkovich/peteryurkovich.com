<template>
    <NuxtLink
        :to="'/' + props.to"
        class="fixed top-1/8 -left-100px h-3/4 w-200px rounded-10 backdrop-blur-3xl bg-slate-9 bg-opacity-50 hover:bg-opacity-70 group pyn-transition-1000"
        :style="viewTransitionName"
    >
        <div class="absolute top-1/2 right-1/6">
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

onKeyStroke(
    "ArrowLeft",
    (e) => {
        navigateTo("/" + props.to);
    },
    { eventName: "keyup" }
);
</script>
