require("dotenv").config()
const jwt = require("jsonwebtoken")

const SECRET = process.env.JWT_SECRET

function generateToken(user){
  const token = jwt.sign(user, SECRET, {expiresIn: "7d"})
  return token
}

const token = generateToken({id:1, email:"member@gym.com"})
console.log("簽發的token:", token)