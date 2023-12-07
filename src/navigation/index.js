import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "../screens/onboarding/Login";
import Onboarding from "../screens/onboarding/onboarding";
import { ViewComponent } from "react-native";
import LeftArrow from "../../assets/svgs/LeftArrow";
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
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            
            options={{
              headerStyle: {
                
              },
              // headerTitle: () => <LeftArrow />,
              headerLeft: () => (
                <LeftArrow />
              ),
              headerRight: () => (
                <Pressable 
                // onPress={() => navigation.navigate("Login")} 
                style={styles.leftText}>
                  <Text style={styles.rightText2}>Switch to</Text>
                  <Text style={styles.rightText1}>Log In</Text> 
                </Pressable>                               
              ),
              headerShown: true,
            }}  
          />

          <Stack.Screen
            name="Login"
            component={Login}
            // options={{ headerShown: true }}
            options={{
              // headerTitle: () => <LeftArrow />,
              headerLeft: () => (
                <LeftArrow />
              ),
              // headerRight: () => (
              //   <View>
              //     <Text>Switch to</Text>
              //     <Text>Log In</Text> 
              //   </View>                               
              // ),
              headerShown: true,
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Navigation;


const styles = StyleSheet.create({
  leftText: {
    flexDirection: 'row',
    marginRight:10,
    width:100
  },
  rightText1: {
    color:'#EA5540',
    marginLeft:5,
  },
  rightText2: {
    color:'#8A9BA3',
  }
})