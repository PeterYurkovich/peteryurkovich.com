<template>
    <div class="p-2">
        <div class="h-40 w-full bg-black text-white p-4 rounded-2xl font-mono">
            <div>
                {{ current }}
            </div>
            <div class="animate-pulse">▮</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useShell } from "~/composables/useShell";

const { current, addCommand } = useShell();
onMounted(async () => {
    await addCommand("sum 1 2");
});
</script>
