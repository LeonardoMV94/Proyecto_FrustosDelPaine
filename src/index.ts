import express from "express"
import type { Application } from "express"
import cors from "cors"
import controllers from "./controllers/index"
import dotenv from "dotenv"

dotenv.config()

const app: Application = express()
const port: number = +process.env.PORT! || 5000

app.use(cors())
app.use(express.json())

controllers(app)

app.listen(port, () => {
    console.log(`[Server]: Listen in http://localhost:${port}/api/v1/test`)
})