const URLBaseGitHubApi = 'https://api.github.com';
const USERS_ENDPOINT = '/users';

export const buildURLSearchUserGitHub = (userName: string) => {
  return `${URLBaseGitHubApi}${USERS_ENDPOINT}/${userName}`;
};

export const buildURLSearchReposUserGitHub = (userName: string) => {
  return `${URLBaseGitHubApi}${USERS_ENDPOINT}/${userName}/repos`;
};
