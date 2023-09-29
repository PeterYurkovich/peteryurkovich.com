export const useShell = () => {
    const fullHistory = ref<string[]>([]);
    const commandHistory = ref<string[]>([]);
    const current = ref<string>("");

    const addResponse = (response: string) => {
        fullHistory.value.push(response);
        current.value = response;
    };

    const addCommand = async (command: string) => {
        commandHistory.value.push(command);
        fullHistory.value.push(command);
        addResponse(await handleCommand(command));
    };

    const clearHistory = () => {
        commandHistory.value = [];
    };

    return {
        fullHistory: readonly(fullHistory),
        commandHistory: readonly(commandHistory),
        current: readonly(current),
        addCommand,
        addResponse,
        clearHistory,
    };
};
