
import * as types from '../../constant';


 const initialState = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    profile: null,
  };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REFRESH_USER_PROFILE:
      return { ...state,  profile: action.payload };
      default:
        return state;
  }
};

export default profileReducer;
