import express from "express"
import type { Application, Response, Request } from "express"
import cors from "cors"
import controllers from "./controllers/index"
import config from "./config"
import path from "path"

const app: Application = express()
const port = config.port

app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '../front/spa/'));

// auth strategies
import './utils/auth/index'



app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../front/spa/index.html'))
});
controllers(app)

// quasar dist


app.listen(port, () => {
    console.clear()
    console.log(`[Server]: Listen in http://localhost:${port}/api/v1/test`)
})