import { describe, it } from 'mocha'
import { expect } from 'chai'
import supertest from 'supertest'
import { app } from '../../src/app.js';

describe('Api Tests E2E', () => {

  before(() => {
    app.listen(3333)
  })

  after(() => {
    app.close()
  })

  it('Should be return 404 if route not exists', async () => {
    const data = await supertest(app).get('/route-not-exists')

    expect(data.status).to.be.eq(404)
    expect(data.body).to.be.eql({ data: 'This route not exists, access /team' })
  })

  it('Should be return three random pokemons in route /team', async () => {
    return await supertest(app).get('/team')
      .expect(200)
      .then((response) => {
        expect(response.body.data[0]).to.be.keys(['name', 'moves'])
      })
  }).timeout(10000)

  it('Should be return three random pokemons in route /team', async () => {
    return await supertest(app).get('/team')
      .expect(200)
      .then((response) => {
        expect(response.body.data[0]).to.be.keys(['name', 'moves'])
      })
  }).timeout(10000)

  
})