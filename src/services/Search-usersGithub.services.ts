import { buildURLSearchUserGitHub, buildURLSearchReposUserGitHub } from '../utils/Search-usersGithub.utils.js';

import { type Getuser, type GetuserRepos, type jsonFormated } from '../types/Search-usersGithub.types.js';

export const GetUsers = async (userName: string): Promise<jsonFormated | string> => {
  const urlUsers = buildURLSearchUserGitHub(userName);
  const urlReposUsers = buildURLSearchReposUserGitHub(userName);

  const responseUsers = await fetch(urlUsers);
  const responseRepo = await fetch(urlReposUsers);

  const dataUsers = (await responseUsers.json()) as Getuser;

  if (!dataUsers.name) {
    return 'User not found';
  }

  const dataRepo = (await responseRepo.json()) as GetuserRepos[];

  const nameRepos = dataRepo.map((nameRepos) => nameRepos.name);
  const principalRepos = nameRepos.slice(0, 4);

  const jsonFormated: jsonFormated = {
    Username: dataUsers.name,
    Folowers: dataUsers.followers,
    Folowing: dataUsers.following,
    Repos_public: dataUsers.public_repos,
    Repos: principalRepos,
  };

  return jsonFormated;
};
