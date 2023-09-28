from fastapi import FastAPI

app = FastAPI()

@app.get("/api/main/sum/")
async def sumNums(num1: int, num2: int):
    return num1 + num2