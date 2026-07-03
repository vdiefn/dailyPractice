const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next){
  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith("Bearer ")){
    return res.status(401).json({ status:"error", message: "未提供token"})
  }

  const token = authHeader.split(" ")[1]
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  }catch(error){
    res.status(401).json({ status:"error", message:"token無效或已過期"})
  }
}

module.exports = authMiddleware