import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Provider as PaperProvider,
} from "react-native-paper";
import Login from "../screens/onboarding/Login";
import Onboarding from "../screens/onboarding/onboarding";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = (props) => {
  const navigationRef = React.useRef();

  return (
      <PaperProvider >
        <NavigationContainer  ref={navigationRef}>
          <Stack.Navigator
            // initialRouteName={
            //   props.profile?.email ? "Home" : "Onboarding"
            // }
          >
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
           
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  );
};
 

export default Navigation;
