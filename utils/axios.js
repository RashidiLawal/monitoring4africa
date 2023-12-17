
import AsyncStorage from   "@react-native-async-storage/async-storage";
import Axios from 'axios';
export const baseURL =  "https://7597-102-88-36-103.ngrok-free.app/api" 

const AxiosCall = async callObj => {

  const { path, method, data, contentType } = callObj;

  let url = `${baseURL}/${path}`;
  const token = await AsyncStorage.getItem('token');
 
  const headers = {
    Authorization: `${token}`,
    'Content-Type': contentType || 'application/json',
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
