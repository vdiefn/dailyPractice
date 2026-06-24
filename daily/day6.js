// Day 6
const http = require("http")

const server = http.createServer((req, res) => {
  if(req.method === "GET" && req.url === "/"){
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>歡迎來到健身房系統!</h1>")
  } else if(req.method === "GET" && req.url === "/api/v1/packages"){
    res.writeHead(200, { "Content-Type": "application/json"})
    const packages = {
      "status":"success",
      "data": "方案列表"
    }
    res.end(JSON.stringify(packages))
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8"})
    res.end("<h1>找不到頁面</h1>")
  }
})

server.listen(3060, ()=> {
  console.log("Server is running on http://localhost:3060")
})