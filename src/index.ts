import express from "express"
import type { Application } from "express"
import cors from "cors"
import controllers from "./controllers/index"
import config from "./config"

const app: Application = express()
const port = config.port

app.use(cors())
app.use(express.json())

// auth strategies
import './utils/auth/index'

controllers(app)

app.listen(port, () => {
    console.log(`[Server]: Listen in http://localhost:${port}/api/v1/test`)
})