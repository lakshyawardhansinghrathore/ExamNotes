import express from 'express'
import dotenv from 'dotenv'
import connectDb from './utils/connectDb.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()


const app = express()

app.use(cors(
    {origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    }
))
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({ message: "NoteForge AI Backend Running" })
})

app.use("/api/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDb()
}) 