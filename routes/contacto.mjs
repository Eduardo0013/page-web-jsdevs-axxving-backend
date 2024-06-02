import { Router } from "express"
import { store } from "../controllers/contacto.mjs"
import validateFields from "../middleware/validateFields.mjs"

const router = Router()

router.get('/',validateFields,store)

export default router