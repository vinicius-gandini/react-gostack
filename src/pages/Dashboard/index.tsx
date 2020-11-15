import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="" alt="Algo" />
          <div>
            <strong>sadsdaf</strong>
            <p>fidjfd jfskdfhjkds fskdjfdskjf sdjkfksd fkd hksd</p>
          </div>

          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
