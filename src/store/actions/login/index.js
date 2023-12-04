import * as types from '../../constant';
import AxiosCall from '../../../../utils/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshProfile, refreshVendors, setActiveProfile } from '../profile';

export const logout = () => {
  return async dispatch => {
    AsyncStorage.clear();
    dispatch(refreshProfile(null))
    dispatch(setActiveProfile(null))
  }
}

const loginStart = () => {
  return { type: types.USER_LOGIN_START };
};
export const loginSuccess = payload => {
  return { type: types.USER_LOGIN_SUCCESS, payload };
};

export const loginFail = payload => {
  return { type: types.USER_LOGIN_FAIL, payload };
};

export const cleanupLoginError = () => {
  return { type: types.CLEAN_UP_LOGIN_ERROR };
};

const resetCodeVerificationStart = () => {
  return { type: types.RESET_CODE_VERIFICATION_START };
};
export const resetCodeVerificationSuccess = payload => {
  return { type: types.RESET_CODE_VERIFICATION_SUCCESS, payload };
};

export const resetCodeVerificationFail = payload => {
  return { type: types.RESET_CODE_VERIFICATION_FAIL, payload };
};

export const cleanupResetCode = () => {
  return { type: types.CLEAN_UP_RESET_CODE_VERIFICATION_ERROR };
};
export const loginRequest = user => {
  return async dispatch => {
    dispatch(loginStart());
    const path = user.userType == 'vendor' || user.userType == 'technician' ? 'vendors/signin' : 'users/signin'
    try {
      const callObj = {
        method: 'POST',
        path,
        data: {...user, }
      };
      const response = await AxiosCall(callObj);
      var userData = JSON.stringify(response.user);
      // dispatch(setActiveProfile(response.user))
      AsyncStorage.setItem('userData', userData);
      AsyncStorage.setItem('userUUID', response.user._id);
      AsyncStorage.setItem('token', response.token);

      dispatch(refreshProfile(response.user));
      dispatch(setActiveProfile(response.user));
      dispatch(loginSuccess(response.user));
    } catch (e) {
      let errorResponse;
      console.log(e, 'lksd')
      if (e.response) {
        const { err } = e.response.data;
        errorResponse = err;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
      dispatch(loginFail(errorResponse));
    }
  };
};


export const refreshUserToken = () => {
  return async dispatch => {
    const callObj = {
      method: 'GET',
      path: 'users/refreshToken?oneSignalUserId=' ,
    };
    try {

      const response = await AxiosCall(callObj);

      // var userData = JSON.stringify(response.userData);
      // console.log(userData)
      // AsyncStorage.setItem('userData', userData);
      // AsyncStorage.getItem('activeProfile', (err, result) => {
      //   if (result) {
      //     var data = JSON.parse(result)
      //     dispatch(setActiveProfile(response.userData))
      //   }
      // })
    }
    catch (e) {
      console.log(e)
    }
  }
}


export const sendPasswordResetCode = user => {
  return async dispatch => {
    try {
      const callObj = {
        method: 'POST',
        path: 'users/recoverPassword',
        data: user
      };
      const response = await AxiosCall(callObj);
    } catch (e) {
      let errorResponse;
      if (e.response) {
        const { error } = e.response.data;
        errorResponse = error;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
    }
  };
};


export const resetConfirmation = data => {
  return async dispatch => {
    try {
      dispatch(resetCodeVerificationStart());
      const callObj = {
        method: 'POST',
        path: 'users/resetConfirmation',
        data
      };
      const response = await AxiosCall(callObj);
      dispatch(resetCodeVerificationSuccess(response.token));
    } catch (e) {
      let errorResponse;
      if (e.response) {
        const { error } = e.response.data;
        errorResponse = error;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
      dispatch(resetCodeVerificationFail(errorResponse));
      console.log(errorResponse)
    }
  };
};



export const resetPassword = data => {
  return async dispatch => {
    try {
      dispatch(resetCodeVerificationStart());
      const callObj = {
        method: 'POST',
        path: 'users/resetPassword',
        data
      };
      const response = await AxiosCall(callObj);
      dispatch(resetCodeVerificationSuccess());
    } catch (e) {
      let errorResponse;
      if (e.response) {
        const { error } = e.response.data;
        errorResponse = error;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
      dispatch(resetCodeVerificationFail(errorResponse));
    }
  };
};
