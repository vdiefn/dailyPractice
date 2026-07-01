// 原始 app.js
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const authMiddleware = require("./middleware/auth")
const jwt = require("jsonwebtoken")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
  const payload = { userId: 1, email: 'member@gym.com' }
  const secret = process.env.JWT_SECRET
  const token = jwt.sign(payload, secret, {expiresIn:"7d"})

  res.status(200).json({ status:"success", data: payload, token })
})

app.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({ status:"success", data: req.user })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`)
})