// 原始 app.js
const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3060

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).json({
    "status":"success",
    "message":"API 運作中"
  })
})

app.post("/members", (req, res) => {
  const { name } = req.body
  res.status(201).json({
    "status":"success",
    "data": {
      "name": name
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})









