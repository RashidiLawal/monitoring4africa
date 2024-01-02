import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "../screens/login/index";
import VerifyEmail from "../screens/verifyEmail";
import CreatePassword from "../screens/createpassword";
import GetStarted from "../screens/started";
import Onboarding from "../screens/onboarding/index";
import Signup from "../screens/signup/index";
import OnboardCompany from '../screens/onboardCompany/index'
import OnboardSuccess from "../screens/onboardCompany/OnboardSuccess";
import OnboardEmployeeSuccess from "../screens/onboardEmployee/OnboardSuccess";
import OnboardEmployee from "../screens/onboardEmployee";
import BottomTab from "./bottomTab";
import NewProject from "../screens/newProject";
import ProjectInformation from "../screens/projectInfo";
import AddCollaborators from "../screens/addCollaborators";
import AddLabourers from "../screens/addLabourers";
import AddOperators from "../screens/addOperators";
import SubContractors from "../screens/subContractors";
import SubContractorSuccess from "../screens/subContractors/SubContractorSuccess";
import Equipments from "../screens/addEquipments";
import Materials from "../screens/addMaterials";
import ProjectSucced from "../screens/projectSuccessful";
import ProjectScreen from "../screens/projectScreen";
// import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Navigation = (props) => {
  const navigationRef = React.useRef();
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          // initialRouteName={
          //   !props.profile ?  "Onboarding" :
          //   props.profile?.onboarded == false ? "OnboardCompany" :
          //    "Home" 
          // }
          initialRouteName="Home"
        >
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="ProjectScreen" component={ProjectScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Equipments" component={Equipments} options={{ headerShown: false }} />
          <Stack.Screen name="Materials" component={Materials} options={{ headerShown: false }} />
          <Stack.Screen name="ProjectSucced" component={ProjectSucced} options={{ headerShown: false }} />
          <Stack.Screen name="SubContractors" component={SubContractors} options={{ headerShown: false }} />
          <Stack.Screen name="AddOperators" component={AddOperators} options={{ headerShown: false }} />
          <Stack.Screen name="AddLabourers" component={AddLabourers} options={{ headerShown: false }} />
          <Stack.Screen name="AddCollaborators" component={AddCollaborators} options={{ headerShown: false }} />
          <Stack.Screen name="ProjectInformation" component={ProjectInformation} options={{ headerShown: false }} />
          <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
          <Stack.Screen name="NewProject" component={NewProject} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardCompany" component={OnboardCompany} options={{ headerShown: false }} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} options={{ headerShown: false }} /><Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardSuccess" component={OnboardSuccess} options={{ headerShown: false }} />
          <Stack.Screen name="SubContractorSuccess" component={SubContractorSuccess} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardEmployee" component={OnboardEmployee} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardEmployeeSuccess" component={OnboardEmployeeSuccess} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
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