require('dotenv').configDotenv()
const Express = require('express')
const bodyParser = require('body-parser')
const app = Express()

app.use(bodyParser.json())
app.use('/',require('./routes/contacto.js'))
app.use((req,res,next) => {
    res.status(404).send('Not Found')
})
const server = app.listen(process.env.PORT ?? 8080)

module.exports = {
    app,
    server
}