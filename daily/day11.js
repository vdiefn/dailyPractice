const express = require("express")
const cors = require("cors")
const app = express()
const membersRouter = require("./routes/members")
const PORT = 3010

app.use(cors())
app.use(express.json())
app.use("/members", membersRouter)

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`)
})