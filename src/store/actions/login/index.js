import * as types from '../../constant';
import AxiosCall from '../../../../utils/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshProfile,  } from '../profile';

export const logout = () => {
  return async dispatch => {
    AsyncStorage.clear();
    dispatch(refreshProfile(null))
  }
}

export const refreshUserToken = () => {
  return async dispatch => {
    const callObj = {
      method: 'GET',
      path: 'users/refresh' ,
    };
    try {
      const response = await AxiosCall(callObj);
      var userData = JSON.stringify(response.userData);
      AsyncStorage.setItem('userData', userData);
      dispatch(refreshProfile(response.userData))
    }
    catch (e) {
      let errorResponse;
      if (e.response) {
        const { error } = e.response.data;
        errorResponse = error;
      } else {
        errorResponse = 'Something went wrong. please try again';
      }
    }
  }
}

 
 