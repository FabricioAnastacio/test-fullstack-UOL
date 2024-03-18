import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste inicial', () => {
  it('Verifica se a aplicação esta rodando', async () => {
    const response = await chai.request(app).get('/');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({ ok: true });
  });
});
