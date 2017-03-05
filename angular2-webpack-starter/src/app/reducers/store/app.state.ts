import { IsLogin } from './../login.reducer';
import { Users } from './../../models/users.model';

export interface IAppState {
  islogin: IsLogin;
  currentuser: Users;
}