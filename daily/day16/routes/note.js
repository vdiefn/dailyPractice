const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/auth")
const notes = [
  { id: 1, userId: 1, title: 'Node.js 學習筆記' },
  { id: 2, userId: 1, title: 'Express 路由整理' },
]

router.get("/", authMiddleware, (req, res) => {
  const myNote = notes.filter(n => n.userId === req.user.userId)
  res.status(200).json({status:"success", data: myNote})
})

module.exports = router
