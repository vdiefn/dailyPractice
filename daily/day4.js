
// Day4
const dotenv = require("dotenv")
dotenv.config()

const http = require("http")
const serverPort = process.env.PORT || 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"})
  res.write("<h2>歡迎來到我的第一個 Node.js 網站！</h2>")
  res.end()
})

server.listen(serverPort, ()=>{
  console.log(`Server is running on http://localhost:${serverPort})`)
});