interface userMock {
  id?: number,
  name: string,
  email?: string,
  phone?: string,
  cpf?: string,
  status: string
}

export const mockUser: userMock = {
  id: 1,
  name: 'Juca',
  email: 'Juca@gmail.com',
  phone: '31999082321',
  cpf: '092.345.412-48',
  status: 'Active'
}

export const createUserExisting: userMock = {
  name: 'Fabio',
  email: 'fabio@gmail.com',
  phone: '31990787821',
  cpf: '132.432.543-98',
  status: 'Active'
}

export const findAllResponse = [
  {
    id: 1,
    name: 'Fabio',
    email: 'fabio@gmail.com',
    phone: '31990787821',
    cpf: '132.432.543-98',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Alisson',
    email: 'Alisson@gmail.com',
    phone: '31992365761',
    cpf: '309.768.983-23',
    status: 'Deactive'
  },
  {
    id: 3,
    name: 'Julio',
    email: 'julio@gmail.com',
    phone: '31256575221',
    cpf: '158.786.653-09',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Lucas',
    email: 'lucas@gmail.com',
    phone: '31923456781',
    cpf: '165.432.783-28',
    status: 'Active'
  },
]
