export type Getuser = {
  name: string;
  followers: number;
  following: number;
  public_repos: number;
};

export type jsonFormated = {
  Username: string;
  Folowers: number;
  Folowing: number;
  Repos_public: number;
  Repos: string[];
};

export type GetuserRepos = {
  name: string;
};

export type bodyreq = {
  Username: string;
};
