import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import bodyparser from "body-parser"
import multer from "multer"
import path from "path"
import morgan from "morgan"
import { fileURLToPath } from "url"
import mongoDb from "./mongoDB/db.js"
import register from './routes/register.js'
import login from './routes/login.js'


// CONFIGURATION

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env') })
const MONGO_URI= process.env.MONGO_URI

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyparser.json({ limit: "30mb", extended: true }))
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

// STORAGE CONFIG USING MULTER INSTRUCTIONS

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

// MONGOOSE SETUP

const PORT = process.env.PORT || 3001
mongoDb(MONGO_URI)

//API ENDPOINTS

app.post('/create-user', register);
app.post('/log-in-user', login);

//GET RESPONSE TESTING

app.get('/', async (req, res) => {
    res.send('HELLO')
})

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server running: http://localhost:${PORT}`)
    })
}
startServer()


