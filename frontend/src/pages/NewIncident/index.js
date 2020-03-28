import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImage from '../../assets/logo.svg'

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile')
    } catch (error) {
      alert(`Não foi possível criar um novo registro. Tente novamente.`)
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói que vai te ajudar.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título do caso"
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor em reais"
          />

          <input className="button" type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
}
