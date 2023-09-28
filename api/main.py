from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def sumNums(num1: int, num2: int):
    return num1 + num2


@app.get("/api/main")
async def sumNums(num1: int, num2: int):
    return num1 * num2