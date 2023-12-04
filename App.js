import React,{useState,useEffect} from 'react'
// import * as Font from 'expo-font';
// import 'react-native-gesture-handler';
import {Provider as StoreProvider} from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './src/store/reducers' 
import thunk from 'redux-thunk';
import Entry from './entry';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () =>  { 
  return (
    <>
    <StoreProvider store={store}>
      <Entry />
    </StoreProvider>
    </>
  );
};


export default App;
