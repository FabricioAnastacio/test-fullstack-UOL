import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function FormRegister(props) {
  const { navigate } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Ativo');
  const [isDisabled, setStateButton] = useState(true);

  useEffect(() => {
    const regexName = /^([A-Z]{1}[a-z]+[ A-Z]{2}[a-z]+[ A-Z]{2}[a-z]+[ A-z]+)$/;
    const regexEmail = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const regexCPF = /^([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})$/;
    setStateButton(
      regexName.test(name)
      && regexEmail.test(email)
      && regexCPF.test(cpf),
    );
  }, [email, name, cpf]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleExit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleChange = ({ target }) => {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'name') setName(target.value);
    if (target.name === 'phone') setPhone(target.value);
    if (target.name === 'cpf') setCpf(target.value);
    if (target.name === 'status') setStatus(target.value);
  };

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      <input
        placeholder="Nome"
        onChange={ handleChange }
        value={ name }
        name="name"
      />
      <input
        placeholder="E-mail"
        onChange={ handleChange }
        value={ email }
        name="email"
      />
      <input
        placeholder="CPF"
        onChange={ handleChange }
        value={ cpf }
        name="cpf"
      />
      <input
        placeholder="Telefone"
        onChange={ handleChange }
        value={ phone }
        name="phone"
      />
      <select
        name="status"
        onChange={ handleChange }
        value={ status }
      >
        <option value="Ativo">Ativo</option>
        <option value="Inativo" selected>Inativo</option>
        <option value="Desativado">Desativado</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
      </select>
      <button
        type="submit"
        disabled={ !isDisabled }
      >
        Criar
      </button>
      <button onClick={ handleExit }>Voltar</button>
    </form>
  );
}

FormRegister.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default FormRegister;
