const express = require("express")
const router = express.Router()

let members = [
  { id: 1, name: '王小明' },
  { id: 2, name: '李小花' },
]

let nextId = 3

const findById = (list, id) => {
  return list.find(item => item.id === id)
}

const validateFields = (body, requiredFields) => {
  return requiredFields.filter(field => !body[field])
}

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: members
  })
})

router.post("/", (req,res) => {
  const missingFields = validateFields(req.body, ["name"])
  if(missingFields.length > 0){
    return res.status(400).json({
      status: "false",
      message: `缺少必填欄位${missingFields}`
    })
  }
  members.push({id: nextId, name: req.body.name})
  res.status(201).json({
    status: "success",
    data: members
  })
})

router.put("/:id", (req, res) => {
  const id = Number(req.params.id)
  const name = req.body.name
  const member = findById(members, id)

  if(!member){
    return res.status(400).json({
      status: "false",
      message: "找不到member"
    })
  }

  const missingField = validateFields(req.body, ["name"])

  if(missingField.length >0){
    return res.status(400).json({
      status:"false",
      message: `缺少必要欄位: ${missingField}`
    })
  }

  member.name = req.body.name

  res.status(200).json({
    status:"success",
    data: member
  })

})

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id)

  const index = members.findIndex(m => m.id === id)

  if(index === -1){
    return res.status(404).json({
      status:"false",
      message: "member不存在"
    })
  }

  members.splice(index, 1)

  res.status(240).end()
})


module.exports = router

// Day 10
// router.get("/", (req, res) => {
//   res.status(200).json({
//     "status":"success",
//     "message":"所有會員列表"
//   })
// })

// router.get("/:id", (req, res) => {
//   const { id } = req.params
//   res.status(200).json({
//     "status":"success",
//     "memberId": id
//   })
// })

