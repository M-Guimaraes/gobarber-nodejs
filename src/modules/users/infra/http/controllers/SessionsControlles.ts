import { Request, Response } from 'express';

import { container } from 'tsyringe';
import AuthenticaUserService from '@modules/users/services/AuthenticateUserService';

import { classToClass } from 'class-transformer'
export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUser = container.resolve(AuthenticaUserService);

    const { user, token } = await authenticateUser.excute({ email, password });

    return response.json({ user : classToClass(user), token });
  }
}
