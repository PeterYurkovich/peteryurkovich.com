<template>
    <div class="p-2">
        <div class="h-40 w-full bg-black text-white p-4 rounded-2xl font-mono">
            <div
                v-for="item in lastFour"
                :style="
                    item.commandType === 'command' ? 'font-style: italic' : ''
                "
            >
                {{ item.text }}
            </div>
            <div class="flex flex-row">
                <input
                    type="text"
                    class="bg-black w-full outline-none"
                    style="caret-shape: block"
                    v-model="input"
                    @keydown.enter="submitCommand"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useShell } from "~/composables/useShell";

const input = ref("");
const { current, addCommand, fullHistory } = useShell();
onMounted(async () => {
    await addCommand("curl https://peteryurkovich.com/api/main?num1=2&num2=4");
});
const lastFour = computed(() => fullHistory.value.slice(-4));
const submitCommand = () => {
    addCommand(input.value);
    input.value = "";
};
</script>
