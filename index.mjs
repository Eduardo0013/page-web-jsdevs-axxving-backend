import Express from 'express'
import { configDotenv } from 'dotenv'
import contacto from './routes/contacto.mjs'
configDotenv()

const app = Express()

app.use('/',contacto)

app.listen(process.env.PORT ?? 8080)