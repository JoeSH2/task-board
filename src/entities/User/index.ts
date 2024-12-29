export {
  useEditUserMutation,
  useLoginMutation,
} from './model/api/fetchAuthUser';
export {
  getUserImage,
  getUserInitial,
  getUserIsAuth,
  getUserUsername,
} from './model/selectors/getUserSelectors';
export { userAction, userReducer } from './model/slice/userSlice';
export type { User } from './model/types/user';
