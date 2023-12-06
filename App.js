import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { Provider as StoreProvider } from "react-redux";
import { PaperProvider } from "react-native-paper";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./src/store/reducers";
import thunk from "redux-thunk";
import Entry from "./entry";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider>
          <Entry />
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

export default App;
