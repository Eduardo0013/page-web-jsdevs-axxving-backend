import transport from '../config/mail.mjs'

const sendMail = ({name,mail,phone,message}) => {
    transport.sendMail({
        from: '"Eduardo Cazabal Salas" <eduardocazabalsalas21@gmail.com>',
        to: '3521111334@uth.edu.mx',
        subject: 'Hello',
        text: 'Hola Mundo',
        html: '<h1 style="color: blue;">Hola Mundo</h1>'
    }).catch(err => console.log(err))
}

export default sendMail