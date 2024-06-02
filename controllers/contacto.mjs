import { request,response } from "express"
import sendMail from "../services/contacto.mjs"

export const store = (req = request,res = response) => {
    const {name,email,phone,message} = req.body
    sendMail({
        name,
        email,
        phone,
        message
    })

    return res.json({
        message : 'Ok'
    })
}