import React, { useEffect, useState } from 'react';
import { requestDataUsers } from '../services/requests';
import '../styles/ListCustomers.css';

function ListCustomers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (
      async () => {
        try {
          const allUsers = await requestDataUsers();
          setUsers(allUsers);
        } catch (e) {
          setUsers([]);
        }
      }
    )();
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
                  <span className={ `span-${user.status[1]}` } />
                  <p>{ user.status }</p>
                </div>
                <button>Editar</button>
              </section>
            </li>
          ))
        }
      </ul>
      <p>{ `Exibindo ${users.length} clientes` }</p>
    </div>
  );
}

export default ListCustomers;
