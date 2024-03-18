import React from 'react';
import '../styles/HeaderCustomers.css';

function HeaderCustomers() {
  return (
    <header>
      <div>
        <img src="https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo.svg?v9" alt="UOL" />
        <h2>UOL</h2>
      </div>
      <div className="header-init">
        <img src="https://cdn-icons-png.flaticon.com/256/3917/3917688.png" alt="img-User" />
        <h1>Painel de clientes</h1>
      </div>
    </header>
  );
}

export default HeaderCustomers;
