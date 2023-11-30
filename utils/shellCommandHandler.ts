export const handleCommand = async (command: string) => {
    switch (true) {
        case command === "help":
            return "Available commands: cat, curl, ls";
        case command === "ls":
            return "README.md";
        case command.startsWith("curl"):
            const query = command.split("?");
            if (query.length === 0) {
                return "Sorry, but there aren't any query parameters! :(";
            }
            if (query[0] !== "curl https://peteryurkovich.com/api/main") {
                return "Nice try, but this is a demo! :) Please send the request to https://peteryurkovich.com/api/main";
            }
            if (query.length > 2) {
                return "Sorry, but there are too many question marks in the url! :(";
            }
            const numbers = query[1]
                .split("&")
                .map((q) => Number(q.split("=")[1]));
            if (numbers.length !== 2) {
                return "Please only send two numbers! num1 and num2";
            }
            const { data } = await useAPI<SumResponse>("/main", {
                query: {
                    num1: Number(numbers[0]),
                    num2: Number(numbers[1]),
                },
            });
            if (data.value) {
                return String(data.value.sum);
            } else {
                return "Error! Something went wrong";
            }
        case command.startsWith("cat"):
            const file = command.split(" ")[1];
            if (file === "README.md") {
                return "cat says meow. :3 Try sending a curl request to https://peteryurkovich.com/api/main with num1 and num2 as query parameters!";
            }
            return "Invalid file!";
        default:
            return ">:(";
    }
};

type SumResponse = {
    sum: number;
};
