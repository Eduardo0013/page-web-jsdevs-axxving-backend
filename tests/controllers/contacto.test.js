const supertest = require('supertest')
const { app , server } = require('../../index.js')
const mail = require('../../config/mail.js')
const transport = require('../../config/mail.js')

const api = supertest(app)

describe('El email', () => {
    test('funciona correctamente',async () => {
        expect(await mail.verify()).toBe(true)
    }) 
    test('se envia correctamente',async () => {
        await api.post('/')
            .send({
                name : 'Eduardo Salas',
                email : 'eduardocazabalsalas@gmail.com',
                phone : '2481280231',
                message : 'Hola Mundo'
            })
            .expect(200)
            .expect('Content-Type',/application\/json/)
    })
})

afterAll(() => {
    transport.close()
    server.close()
})