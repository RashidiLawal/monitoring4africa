import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "../screens/login";
import Onboarding from "../screens/onboarding";
import Signup from "../screens/signup";
import OnboardCompany from "../screens/onboardCompany";
import VerifyEmail from "../screens/VerifyEmail";
import CreatePassword from "../screens/createpassword";
// import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = (props) => {
  const navigationRef = React.useRef();
  // const navigation = useNavigation();
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
        // initialRouteName={
        //   props.profile?.email ? "Home" : "Onboarding"
        // }
        >
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardCompany" component={OnboardCompany} options={{ headerShown: false }} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} options={{ headerShown: false }} /><Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Signup" component={Signup} options={{
            headerShown: false,
          }} />


        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Navigation;


const styles = StyleSheet.create({
  leftText: {
    flexDirection: 'row',
    marginRight: 10,
    width: 100
  },
  rightText1: {
    color: '#EA5540',
    marginLeft: 5,
  },
  rightText2: {
    color: '#8A9BA3',
  }
})