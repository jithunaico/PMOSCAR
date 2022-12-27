import { RequestHandler } from 'express';

import { IUserDTO } from '../../dto/userDTO';
import handleErrorMiddleware from '../../middleware/handle-error';
import User, { IUser } from '../../models/User';
import { IBodyRequest } from '../../interfaces/request';
import { Email } from '../../services/email';
import config from '../../config/config';

const emailService = new Email(config);

type ISignupRequest = IBodyRequest<IUser>;

let signup: RequestHandler = async (req: ISignupRequest, res) => {
  const { email, password, role } = req.body;

  const user = new User({ email, password, role });
  const userSaved: IUserDTO = await user.save();

  res.send(userSaved);
};

signup = handleErrorMiddleware(signup);

export default signup;
