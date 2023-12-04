import * as types from '../../constant';


export const refreshProfile = payload => {
  return { type: types.REFRESH_USER_PROFILE, payload };
}; 