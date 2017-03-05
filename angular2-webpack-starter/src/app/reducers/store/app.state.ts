import { IsLogin } from './../login.reducer';
import { Users } from './../../models/users.model';
import { NavContext } from './../../components/navheader/navheader.context';

export interface IAppState {
  islogin: IsLogin;
  currentuser: Users;
  navpage: NavContext;
}