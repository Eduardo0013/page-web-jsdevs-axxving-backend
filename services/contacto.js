const transport = require('../config/mail.js')

const enviarMail = async ({name,email,phone,message}) => {
    await transport.sendMail({
        from: email,
        to: 'thewarrior20013@gmail.com',
        subject: `Mensaje de contacto de ${name}`,
        text: `
            ${message}
            número telefónico: ${phone}
        `,
    })
    transport.close()
}

module.exports = enviarMail