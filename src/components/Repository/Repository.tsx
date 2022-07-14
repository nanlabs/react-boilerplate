import React, { FC } from 'react';
import Loading from 'components/Loading';
import { useGithubRepositoryQuery } from 'services/github';
import { RepositoryContainer } from './styles';

type RepositoryProps = {
  name: string;
};

const Repository: FC<RepositoryProps> = ({ name }) => {
  const { isLoading, error, data, isFetching } = useGithubRepositoryQuery(name);

  return (
    <RepositoryContainer>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p>{'An error has occurred: ' + error.message}</p>
      ) : (
        <div>
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
          <strong>👀 {data?.subscribers_count}</strong> <strong>✨ {data?.stargazers_count}</strong>{' '}
          <strong>🍴 {data?.forks_count}</strong>
          <div>{isFetching ? 'Updating...' : ''}</div>
        </div>
      )}
    </RepositoryContainer>
  );
};

export default Repository;
