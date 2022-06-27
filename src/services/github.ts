/**
 *  this is an example of how to create a service to hit our api,
 *  in this case we are hitting directly to github, the idea is
 *  to configure BASE_URL in the .env file.
 *
 */
import { get } from 'libs/http';
import { useQuery } from 'react-query';

const GITHUB_REPO_API = 'https://api.github.com/repos/';
const DEFAULT_REPOSITORY_EXAMPLE = 'tannerlinsley/react-query';

type GithubRepository = {
  name: string;
  description: string;
  forks_count: number;
  subscribers_count: number;
  stargazers_count: number;
};

export const getGithubRepository = async (repoUrl = DEFAULT_REPOSITORY_EXAMPLE) => {
  const { data } = await get<GithubRepository>(`${GITHUB_REPO_API}${repoUrl}`);
  return data;
};

export const useGithubRepositoryQuery = (repoUrl = DEFAULT_REPOSITORY_EXAMPLE) =>
  useQuery<GithubRepository, Error>(['githubRepository', repoUrl], () => getGithubRepository(repoUrl));
