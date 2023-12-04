import { Linking, Alert, Platform } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AxiosCall from './axios';

export const callNumber = phone => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  }
  else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};

export const unique = (a) => {
  var prims = { "boolean": {}, "number": {}, "string": {} }, objs = [];

  return a.filter(function (item) {
    var type = typeof item;
    if (type in prims)
      return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
    else
      return objs.findIndex((b) => b.latitude == item.latitude) != -1 ? false : objs.push(item);
  });
}


export const resetStackAndNavigate = (navigation, path) => {
  navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: path }] }));
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const generateRandomNumber = (n) => {
  return Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1);
}
export const formatImg = ({ uri }) => {
  let filename = uri.split('/').pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;
  return { uri, name: filename, type };
};
export const uploadImage = async (file) => {

  try {
    const form = new FormData();
    var img = formatImg({ uri: file });
    form.append('file', {
      name: img.name,
      type: img.type,
      uri: Platform.OS === 'android' ? img.uri : img.uri.replace('file://', '')
    })
    const callObj = {
      method: "POST",
      path: `application/uploadfile`,
      contentType: 'multipart/form-data',
      data: form,
    };
    var res = await AxiosCall(callObj);
    return res.url
  } catch (error) {
    console.log(error?.response ? error?.response?.data : error)
  }
};
  