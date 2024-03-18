import React, { useEffect, useState } from 'react';
import { api } from '../services/fetchAPI';
import '../styles/ListCustomers.css';

function ListCustomers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(api);
  }, []);

  return (
    <div className="list-customers">
      <ul>
        {
          users.map((user, index) => (
            <li key={ index }>
              <section>
                <h3>{ user.name }</h3>
                <p>{ user.email }</p>
              </section>
              <section>
                <h3>{ user.cpf }</h3>
                <p>{ user.phone }</p>
              </section>
              <p>{ user.status }</p>
              <button>Editar</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ListCustomers;
