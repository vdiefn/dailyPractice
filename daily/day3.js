const fs = require('fs/promises');
const dotenv = require("dotenv")
dotenv.config()

const getUploadConfig = () => {
  return {
    uploadDir: process.env.UPLOAD_DIR || "/tmp",
    maxFileSize: Number(process.env.MAX_FILE_SIZE) || 5,
    gymName: process.env.GYM_NAME || "未命名健身房"
  }
}

console.log(getUploadConfig())