// Day 5
const incomingFiles = {
  report: [
    {
      originalFilename: "health-report.pdf",
      filepath: "/tmp/file-9999"
    }
  ]
}

function parseMemberFile(files) {
  const file = files.report[0]
  if(!file){
    console.log("找不到檔案")
    return
  }
  const name = file.originalFilename
  const path = file.filepath

  console.log(
    `檔案名稱: ${name}, 檔案位於: ${path}`
  )
}

parseMemberFile(incomingFiles);