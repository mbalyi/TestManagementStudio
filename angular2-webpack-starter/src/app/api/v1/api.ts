export * from './AuthApi';
import { AuthApi }  from './AuthApi';
export * from './GroupsApi';
import { GroupsApi }  from './GroupsApi';
export * from './RolesApi';
import { RolesApi }  from './RolesApi';
export * from './UsersApi';
import { UsersApi }  from './UsersApi';
export const APIS = [ AuthApi, GroupsApi, RolesApi, UsersApi, ];
