
/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
import AsyncStorage from   "@react-native-async-storage/async-storage";
import Axios from 'axios';
export const baseURL =  "https://868c-102-89-45-243.ngrok-free.app/api" 

const AxiosCall = async callObj => {

  const { path, method, data, contentType, baseUrlType = null } = callObj;

  let url = `${baseURL}/${path}`;
  const token = await AsyncStorage.getItem('token');
 
  const headers = {
    Authorization: `${token}`,
    // 'Content-Type': contentType || 'application/json'
  };
  try {
    const response = await Axios({ method, url, data, headers, json: true });
    const result = response && response.data;
    return result;
  } catch (error) {
    throw error;
  }
};

 

export default AxiosCall;
