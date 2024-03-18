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
                <h4>{ user.name }</h4>
                <p>{ user.email }</p>
              </section>
              <section>
                <h4>{ user.cpf }</h4>
                <p>{ user.phone }</p>
              </section>
              <section className="status-button">
                <div>
                  <span className={ `span-${user.status.split('', 2).join('')}` } />
                  <p>{ user.status }</p>
                </div>
                <button>Editar</button>
              </section>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ListCustomers;
