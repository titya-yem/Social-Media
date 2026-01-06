import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Lamdouy !");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
});