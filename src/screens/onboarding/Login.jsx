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
import LeftArrow from "../../../assets/svgs/LeftArrow";
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
        <Pressable
          onPress={() => navigation.goBack()}
          shadow
          padding={[10]}
          margin={[0, 20]}
        >
          <BackIcon />
          {/* <SimplelineIcon name="arrow-left" color={'white'} size={15} /> */}
        </Pressable>

        <CustomView center padding={[0]}>
          {/* <CustomText>
                       Supplies needed
                    </CustomText> */}
        </CustomView>
        {/* <TouchableOpacity style={{ marginRight: 30 }}>
         
          <CustomView row center>
            <CustomText margin={[0, 5]}>Switch to</CustomText>
            <CustomText color={COLORS.orange}>Log In</CustomText>
          </CustomView>
        </TouchableOpacity> */}
      </Appbar.Header>
      <View style={styles.body}>
        <View style={styles.termsText}>
          <View style={styles.inputsAndLog}>
            <View style={styles.signAndLog}>
              <Text style={styles.text1}>Login to your Account</Text>
              <View style={styles.twoText}>
                <Text style={styles.text2}>Don’t have an account? </Text>
                <Text style={styles.text3}>Sign Up</Text>
              </View>
            </View>

            <View style={styles.inputs}>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#8A9BA3"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="*********"
                  placeholderTextColor="#8A9BA3"
                />
              </View>
            </View>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text2}>Forget Password?</Text>
            <Text style={styles.text3}>Reset</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button1,
            { backgroundColor: pressed ? "#bee5ed" : "#31AEE8" },
          ]}
        >
          <Text style={styles.textInPres1}>Login</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFF",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 95,
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
