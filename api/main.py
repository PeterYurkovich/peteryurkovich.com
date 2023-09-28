from fastapi import FastAPI

app = FastAPI()

@app.get("/api/main")
async def sumNums(num1: int, num2: int):
    return {'sum': num1 + num2}
