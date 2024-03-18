import { afterEach, describe, it } from '@jest/globals';
import chai, { expect } from 'chai';
import sinon from 'sinon'
import chaiHttp from 'chai-http';
import { findAllResponse, mockUpdateUser, mockUser } from './mocks/user.mock';
import { app } from '../app';
import UserModel from '../database/model/UserModel';

chai.use(chaiHttp);

describe('Testa a rota post/user', () => {
  it('Verifica se é possivel cadastrar um novo usuario', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);
    sinon.stub(UserModel, 'create').returns(mockUser as any);

    delete mockUser.id;
    
    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);

    expect(status).to.equal(201);
    expect(body).to.deep.equal(mockUser);
  });

  it('Verifica se não é possivel cadastrar um usuario existente', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    const { status, body } = await chai.request(app).post('/user')
    .send({
      name: 'Fabio',
      email: 'fabio@gmail.com',
      phone: '31990787821',
      cpf: '132.432.543-98',
      status: 'Active'
    });

    expect(status).to.equal(409);
    expect(body).to.deep.equal({ message: 'CPF or Email already exists' });
  });

  it('Verifica se não é possivel cadastrar um usuario com email inexistente', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    delete mockUser.email;

    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: '"email" is required' });
  });

  it('Verifica se não é possivel cadastrar um usuario com email incorreto', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    mockUser.email = 'jucagmailcom';

    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);
    
    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: '"email" must be a valid email' });
  });

  it('Verifica se não é possivel cadastrar um usuario com phone inexistente', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);
    
    mockUser.email = 'juca@gmail.com';
    delete mockUser.phone;

    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: '"phone" is required' });
  });

  it('Verifica se não é possivel cadastrar um usuario com phone incompleto', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    mockUser.phone = '1234';

    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: '"phone" length must be at least 11 characters long' });
  });

  it('Verifica se não é possivel cadastrar um usuario com cpf incorreto', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    mockUser.cpf = '123.432';

    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: '"cpf" length must be at least 14 characters long' });
  });

  it('Verifica se não é possivel cadastrar um usuario com cpf inexistente', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    delete mockUser.cpf;

    const { status, body } = await chai.request(app).post('/user')
    .send(mockUser);

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: '"cpf" is required' });
  });

  afterEach(sinon.restore);
});

describe('Testa a rota get/user', () => {
  it('Verifica se é possivel visualizar todos os usuarios cadastrados', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);

    const { status, body } = await chai.request(app).get('/user');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(findAllResponse);
  });

  it('Verifica se é retornado um erro caso não exita usuarios cadastrados', async () => {
    sinon.stub(UserModel, 'findAll').resolves(undefined);

    const { status, body } = await chai.request(app).get('/user');

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'Users not found' });
  });

  it('Verifica se é possivel buscar por nome de usuario', async () => {
    sinon.stub(UserModel, 'findOne').resolves(mockUser as any);

    const { status, body } = await chai.request(app).get('/user/search')
    .query({ q: 'Juca' });

    expect(status).to.equal(200);
    expect(body).to.deep.equal(mockUser);
  });

  it('Verifica se é retornado um erro caso o nome passado não seja encontrado', async () => {
    sinon.stub(UserModel, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/user/search')
    .query({ q: 'Silvio' });

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: "Users not found" });
  });

  afterEach(sinon.restore);
});

describe('Testa a rota put/user/:id', () => {
  it('Verifica se é possivel editar os dados de um usuario', async () => {
    sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);
    sinon.stub(UserModel, 'update').resolves(undefined);

    const { status, body } = await chai.request(app).put('/user/2')
    .send(mockUpdateUser);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({
      id: 2,
      ...mockUpdateUser
    });
  });

  describe('Verifica se as informações de atualização são validadas corretamente', () => {
    it('Verifica se é possivel atualizar sem a informação de numero de telefone', async () => {
      sinon.stub(UserModel, 'findAll').resolves(undefined);
      sinon.stub(UserModel, 'update').resolves(undefined);
  
      delete mockUpdateUser.phone;

      const { status, body } = await chai.request(app).put('/user/2')
      .send(mockUpdateUser);
  
      expect(status).to.equal(400);
      expect(body).to.deep.equal({ message: '"phone" is required' });
    });
    it('Verifica se é possivel atualizar sem a informação de CPF', async () => {
      sinon.stub(UserModel, 'findAll').resolves(undefined);
      sinon.stub(UserModel, 'update').resolves(undefined);
  
      mockUpdateUser.phone = '31098732167';
      delete mockUpdateUser.cpf;

      const { status, body } = await chai.request(app).put('/user/2')
      .send(mockUpdateUser);
  
      expect(status).to.equal(400);
      expect(body).to.deep.equal({ message: '"cpf" is required' });
    });
    it('Verifica se é possivel atualizar sem a informação de Nome', async () => {
      sinon.stub(UserModel, 'findAll').resolves(undefined);
      sinon.stub(UserModel, 'update').resolves(undefined);
  
      mockUpdateUser.cpf = '890.345.908-13';
      delete mockUpdateUser.name;

      const { status, body } = await chai.request(app).put('/user/2')
      .send(mockUpdateUser);
  
      expect(status).to.equal(400);
      expect(body).to.deep.equal({ message: '"name" is required' });
    });
    it('Verifica se é possivel atualizar sem a informação de Email', async () => {
      sinon.stub(UserModel, 'findAll').resolves(undefined);
      sinon.stub(UserModel, 'update').resolves(undefined);
  
      mockUpdateUser.name = 'Luar';
      delete mockUpdateUser.email;

      const { status, body } = await chai.request(app).put('/user/2')
      .send(mockUpdateUser);
  
      expect(status).to.equal(400);
      expect(body).to.deep.equal({ message: '"email" is required' });
    });
    it('Verifica se é possivel atualizar caso use informações ja existentes no banco', async () => {
      sinon.stub(UserModel, 'findAll').resolves(findAllResponse as any);
      sinon.stub(UserModel, 'update').resolves(undefined);
  
      mockUpdateUser.email = findAllResponse[0].email;
      mockUpdateUser.cpf = findAllResponse[0].cpf;

      const { status, body } = await chai.request(app).put('/user/2')
      .send(mockUpdateUser);
  
      expect(status).to.equal(409);
      expect(body).to.deep.equal({ message: 'CPF or Email already exists' });
    });
  });

  afterEach(sinon.restore);
});
