export const handleCommand = async (command: string) => {
    switch (true) {
        case command === "help":
            return "Available commands: ls";
        case command === "ls":
            return "README.md";
        case command.startsWith("sum"):
            console.log(command);
            const numbers = command.split(" ").slice(1).map(Number);
            if (numbers.length !== 2) return "Error!";
            const { data } = await useAPI<SumResponse>("/main", {
                query: {
                    num1: numbers[0],
                    num2: numbers[1],
                },
            });
            if (data.value) {
                return String(data.value.sum);
            } else {
                return "Error!";
            }
        default:
            return ">:(";
    }
};

type SumResponse = {
    sum: number;
};
