import { IsLogin } from './../login.reducer';
import { User } from './../../api/index';
import { NavContext } from './../../components/navheader/navheader.context';

export interface IAppState {
  islogin?: IsLogin;
  currentuser?: User;
  navpage?: NavContext;
}