const request = require('supertest')
const app = require('./index')

describe('Employee Directory API', () => {
    it('GET /users', async () => {
        return request(app)
            .get('/api/users')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.body.data).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            email: expect.any(String),
                            first_name: expect.any(String),
                            last_name: expect.any(String),
                            avatar: expect.any(String)
                        })
                    ])
                )
            })
    })
})