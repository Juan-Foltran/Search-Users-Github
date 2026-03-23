import { type Request, type Response } from 'express';
import { type bodyreq, type GetuserRepos, type Getuser } from '../types/Search-usersGithub.types.js';
import { GetUsers } from '../services/Search-usersGithub.services.js';

export const dataUsers = async (req: Request<{}, {}, bodyreq>, res: Response) => {
  const { Username } = req.body;

  if (!Username) {
    return res.status(400).json({
      ERROR: 'Username is required',
    });
  }

  const search = await GetUsers(Username);

  if (typeof search === 'string') {
    return res.status(404).json({
      error: search,
    });
  }

  return res.status(200).json(search);
};
