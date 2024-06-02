const { store } = require('../controllers/contacto.js')
const { Router } = require('express')
const validateFields = require('../middleware/validateFields.js')

const router = Router()

router.post('/',validateFields,store)

module.exports = router