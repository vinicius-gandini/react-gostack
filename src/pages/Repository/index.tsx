import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong />
            <p />
          </div>
        </header>
        <ul>
          <li>
            <strong />
            <span />
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdad">
          <div>
            <strong>asdsadsad</strong>
            <p>sadd d asdsadsadsad</p>
          </div>

          <FiChevronRight size={24} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
