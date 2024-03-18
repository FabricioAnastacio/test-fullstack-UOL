import React from 'react';
import ListCustomers from '../components/ListCustomers';

function Customers() {
  const numCustomers = 2;
  return (
    <main className="page-customers">
      <h1>Painel de clientes</h1>
      <hr />
      <h3>Listagem de usuários</h3>
      <button>Novo cliente</button>
      <ListCustomers />
      <p>{ `Exibindo ${numCustomers} clientes` }</p>
    </main>
  );
}

export default Customers;
