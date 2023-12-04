import React,{useState,useEffect} from 'react'
// import * as Font from 'expo-font';
// import 'react-native-gesture-handler';
import {Provider as StoreProvider} from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './src/store/reducers' 
import thunk from 'redux-thunk';
import Login from './src/screens/onboarding/Login';
import Entry from './entry';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () =>  {
//   const [isLoadingComplete, setIsLoadingComplete] = useState(false);

//   const prepareResources = async () => {
//     await _loadResourcesAsync();
//     setIsLoadingComplete(true);
//   };

// const _loadResourcesAsync = async () => {
//   return Font.loadAsync({
//     'avenir-bold': require('./assets/fonts/avenir-bold.ttf'),
//     'avenir-heavy': require('./assets/fonts/avenir-heavy.ttf'),
//     'avenir-semibold': require('./assets/fonts/avenir-semibold.ttf'),
//     'avenir-medium': require('./assets/fonts/avenir-medium.ttf'),
//     'avenir-regular': require('./assets/fonts/avenir-regular.ttf'),
//     'avenir-light': require('./assets/fonts/avenir-light.ttf'),
//     'lucida-grande': require('./assets/fonts/LucidaGrande.ttf'),
//     'lucida-grande-bold': require('./assets/fonts/LucidaGrandeBold.ttf'),
//   });
// };

// useEffect(() => {
//   prepareResources();
// }, []);
// if (!isLoadingComplete) return null;

  return (
    <>
    <StoreProvider store={store}>
      {/* <Navigation /> */}
      <Entry />
      {/* <Login /> */}
    </StoreProvider>
    </>
  );
};


export default App;
