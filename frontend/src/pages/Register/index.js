import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg';

export default function Register() {

  const [uf, setUf] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      uf,
      name,
      city,
      email,
      whatsapp
    }

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu id de acesso ${response.data.id}`)

      history.push('/');

    } catch (error) {
      alert(`Erro no cadastro, tente novamente.`)
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastro</h1>
          <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="Whatsapp"
          />

          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>

          <input className="button" type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
}
