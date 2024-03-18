import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [editUser, setEditUser] = useState({});

  const values = useMemo(() => ({
    editUser,
    setEditUser,
  }), [editUser]);

  return (
    <AppContext.Provider value={ values }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
