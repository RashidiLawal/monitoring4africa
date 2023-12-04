import * as types from '../../constant';
const initialState = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    token: null

  };

const passwordResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_CODE_VERIFICATION_START:
      return { ...state, isLoading: true, error: null };
    case types.RESET_CODE_VERIFICATION_SUCCESS:
      return { ...state,  isLoading: false, isSuccessful: true , token: action.payload};
    case types.RESET_CODE_VERIFICATION_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case types.CLEAN_UP_RESET_CODE_VERIFICATION_ERROR:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default passwordResetReducer;
