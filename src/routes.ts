import express, { type Router, type Request, type Response } from 'express';
import { dataUsers } from './controllers/ControllerSearchUser.js';

const route: Router = express.Router();

route.post('/Search-users-Github', dataUsers);

export default route;
