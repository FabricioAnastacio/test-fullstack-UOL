import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListCustomers from '../components/ListCustomers';
import HeaderCustomers from '../components/HeaderCustomers';
import '../styles/Customers.css';

function Customers() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/addUser');
  };

  return (
    <>
      <HeaderCustomers />
      <main className="page-customers">
        <hr />
        <div id="header-list">
          <div>
            <h3>Listagem de usuários</h3>
            <p>Escolha um cliente para visualizar os detalhes</p>
          </div>
          <button onClick={ handleClick }>Novo cliente</button>
        </div>
        <ListCustomers />
      </main>
    </>
  );
}

export default Customers;
