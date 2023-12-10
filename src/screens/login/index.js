import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ViewComponent,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";
import { Appbar } from "react-native-paper";
import SimplelineIcon from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../../components/ui/CustomButton";
import CustomText from "../../components/ui/CustomText";
import CustomView from "../../components/ui/CustomView";
import CustomInput from "../../components/ui/CustomInput";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 0, 0, 5]}>
        <Pressable
          onPress={() => navigation.goBack()}
          shadow         
        >
          <BackIcon />       
        </Pressable>   
        </CustomView>             
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView style={styles.termsText}>
          <CustomView style={styles.inputsAndLog}>
            <CustomView style={styles.signAndLog}>
              <CustomText style={styles.text1}>Login to your Account</CustomText>
              <CustomView style={styles.twoText}>
                <CustomText style={styles.text2}>Don’t have an account? </CustomText>
                <CustomText style={styles.text3}>Sign Up</CustomText>
              </CustomView>
            </CustomView>

            <CustomView style={styles.inputs}>
              <CustomView style={styles.inputBox}>
                <CustomText style={styles.label}>Email</CustomText>
                <CustomInput
                  style={styles.input}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#8A9BA3"
                />
              </CustomView>
              <CustomView style={styles.inputBox}>
                <CustomText style={styles.label}>Password</CustomText>
                <CustomInput
                  style={styles.input}
                  placeholder="*********"
                  placeholderTextColor="#8A9BA3"
                />
              </CustomView>
            </CustomView>
          </CustomView>

          <CustomView style={styles.texts}>
            <CustomText style={styles.text2}>Forget Password?</CustomText>
            <CustomText style={styles.text3}>Reset</CustomText>
          </CustomView>
        </CustomView>      
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
      <CustomButton
        onPress={() => navigation.navigate("OnboardCompany")}
      >
        <CustomText white bold size={18}>Login</CustomText>
      </CustomButton> 
      </CustomView> 
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    justifyContent: "space-between",
    height: "100%",
    
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 95,
  },
  container: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    height: "100%", 
    paddingHorizontal: 15,
    paddingTop: 5,
    
    // paddingBottom: 95,
  },
  inputsAndLog: {
    flexDirection: "column",
    rowGap: 35,
  },
  signAndLog: {
    flexDirection: "column",
    rowGap: 10,
  },
  inputs: {
    flexDirection: "column",
    rowGap: 30,
  },
  inputBox: {
    width: "100%",
  },
  label: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F5F8FA",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  termsText: {
    flexDirection: "column",
    rowGap: 10,
  },
  twoText: {
    flexDirection: "row",
  },
  text1: {
    color: "#232323",
    fontSize: 27,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 1,
  },
  text2: {
    color: "#53666E",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.1,
  },
  text3: {
    color: "#EA5540",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.1,
  },
  texts: {
    flexDirection: "row",
    columnGap: "4",
  },
  button1: {
    borderRadius: 10,
    paddingBottom: 17,
    paddingTop: 15,
    width: "102%",
  },
  textInPres1: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },
});