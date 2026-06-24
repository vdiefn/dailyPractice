// 原始 app.js
const express = require("express")
const app = express()
const PORT = 3060

app.get("/coaches/:id", (req, res) => {
  const coachId = req.params.id
  res.status(200).json({
    "status":"success",
    "coachId":coachId
  })
})

app.get("/courses", (req,res)=> {
  const { type, limit } = req.query
  res.status(200).json({
    "status":"success",
    "filter": {
      "type": type,
      "limit": limit
    }
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})










