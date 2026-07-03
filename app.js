require("dotenv").config()
const express = require("express")
const cors = require("cors")
const authRouter = require("./routes/auth")
const noteRouter = require("./routes/note")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRouter)
app.use("/note", noteRouter)

app.use((req,res) => {
  res.status(404).json({ status: 'error', message: '路由不存在' });
})

app.use((err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message})
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`app is listening on PORT:${3000}`)
})