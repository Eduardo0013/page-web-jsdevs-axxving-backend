const { request, response } = require('express')
const enviarMail = require('../services/contacto')

const store = async (req = request,res = response) => {
    try {
        enviarMail(req.body)

        return res.status(200).json({
            message : 'Email enviado'
        })
    } catch (error) {
        return res.status(501).json({
            message : 'Contacta al administrador'
        })
    }
}

module.exports = {
    store
}