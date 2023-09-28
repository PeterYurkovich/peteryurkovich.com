<template>
    <Badge>
        <Icon :name="props.icon" size="1.75rem" class="-mt-1.25 mr-2 py-0.5" />
        <slot />
    </Badge>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
});
</script>
