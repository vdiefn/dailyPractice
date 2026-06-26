const express = require("express")
const cors = require("cors")
const memberRoute = require("./routes/members")
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use("/members", memberRoute)

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})