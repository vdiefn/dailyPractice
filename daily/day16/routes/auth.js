const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()

const users = []
let nextId = 1

router.post("/register", async (req, res) => {
  const { email, password } = req.body
  if(!email || !password) {
    return res.status(400).json({status:"error", message: "請填email與password"})
  }

  const isExist = users.filter(u => u.email === email)
  if(isExist.length > 0){
    return res.status(409).json({ status:"error", message: "email已存在"})
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { id: nextId, email, password: hashedPassword }
    users.push(newUser)
    res.status(201).json({ status:"success", message:"註冊成功", data: { id: nextId, email }})
  } catch (error) {
    next(error)
  }
})

router.post("/login", async(req, res) => {
  const { email, password } = req.body
  if(!email || !password) {
    return res.status(400).json({status:"error", message: "請填email與password"})
  }

  const user = users.find(u => u.email === email)
  if(!user){
    return res.status(400).json({status:"error", message:"email或密碼錯誤"})
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      return res.status(400).json({status:"error", message:"email或密碼錯誤"})
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email},
      process.env.JWT_SECRET,
      {expiresIn: "7d"}
    )

    res.status(200).json({ status:"success", token})
  } catch (error) {
    next(error)
  }
})

module.exports = router