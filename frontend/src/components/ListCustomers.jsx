import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestDataUsers } from '../services/requests';
import '../styles/ListCustomers.css';
import AppContext from '../context/AppContext';
import { mockUsers } from '../services/mockApi';

function ListCustomers(props) {
  const { navigate } = props;
  const { setEditUser } = useContext(AppContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (
      async () => {
        try {
          const allUsers = await requestDataUsers();
          setUsers(allUsers);
        } catch (e) {
          setUsers(mockUsers);
        }
      }
    )();
  }, []);

  const handleEditUser = (user) => {
    setEditUser(user);
    navigate('/addUser');
  };

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
                <button onClick={ () => handleEditUser(user) }>Editar</button>
              </section>
            </li>
          ))
        }
      </ul>
      <p>{ `Exibindo ${users.length} clientes` }</p>
    </div>
  );
}

ListCustomers.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default ListCustomers;
