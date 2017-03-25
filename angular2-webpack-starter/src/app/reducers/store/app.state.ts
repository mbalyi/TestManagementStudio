import { IsLogin } from './../login.reducer';
import { User } from './../../api/index';
import { NavContext } from './../../components/navheader/navheader.context';
import { Message } from 'primeng/primeng';

export interface IAppState {
  islogin?: IsLogin;
  currentuser?: User;
  navpage?: NavContext;
  notification?: Message[];
}