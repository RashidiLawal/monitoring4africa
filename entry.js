import React, { useState, useEffect } from 'react'
import { Image, Platform } from "react-native"
import { connect, useDispatch, useSelector } from 'react-redux';
import Navigation from './src/navigation';
import CustomView from './src/components/ui/CustomView';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshProfile } from './src/store/actions/profile';
import { refreshUserToken } from './src/store/actions/login';
const Entry = () => {
  const profile = useSelector(s => s.profile)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
    useEffect(() => {
 
    AsyncStorage.getItem('userData', (err, result) => {
      if (result) {
        var userData = JSON.parse(result);
        dispatch(refreshProfile(userData))
        dispatch(refreshUserToken())
      }
      setLoaded(true)
    });
  }, [])

  if (!loaded) {
    return (<CustomView center middle flex={true} flexGrow    >
      {/* <Image style={{ width: 50 + '%', height: 50 }} source={require("./assets/images/splashscreen.png")} /> */}
    </CustomView>)
  }
  return (
    <>
      <Navigation profile={profile} />
    </>
  );
};


export default Entry;
