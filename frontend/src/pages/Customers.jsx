import React from 'react';
import ListCustomers from '../components/ListCustomers';
import HeaderCustomers from '../components/HeaderCustomers';
import '../styles/Customers.css';

function Customers() {
  return (
    <>
      <HeaderCustomers />
      <main className="page-customers">
        <div className="header-init">
          <img src="https://cdn-icons-png.flaticon.com/256/3917/3917688.png" alt="img-User" />
          <h1>Painel de clientes</h1>
        </div>
        <hr />
        <div id="header-list">
          <div>
            <h3>Listagem de usuários</h3>
            <p>Escolha um cliente para visualizar os detalhes</p>
          </div>
          <button>Novo cliente</button>
        </div>
        <ListCustomers />
      </main>
    </>
  );
}

export default Customers;
