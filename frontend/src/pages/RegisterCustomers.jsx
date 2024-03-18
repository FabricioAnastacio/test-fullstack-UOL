import { useNavigate } from 'react-router-dom';
import FormRegister from '../components/FormRegister';
import HeaderCustomers from '../components/HeaderCustomers';
import '../styles/RegisterCustomers.css';

function RegisterCustomers() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderCustomers />
      <main className="page-register">
        <hr />
        <h3>Novo usuário</h3>
        <p>Informe os campos a seguir para criar novo usuário:</p>
        <FormRegister navigate={ navigate } />
      </main>
    </>
  );
}

export default RegisterCustomers;
