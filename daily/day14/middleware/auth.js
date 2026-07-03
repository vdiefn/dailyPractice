const jwt = require("jsonwebtoken")


const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startsWith("Bearer ")){
    return res.status(401).json({status:"error", message:"未提供token"})
  }
  const token = authHeader.split(" ")[1]
  try {
    const SECRET = process.env.JWT_SECRET
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({status:"error", message:"Token 無效或過期"})
  }
}

module.exports = authMiddleware