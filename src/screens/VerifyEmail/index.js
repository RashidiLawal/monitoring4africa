import React from "react";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import { StyleSheet, Pressable, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import GetStarted from "../started";

const VerifyEmail = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header>
        <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <BackIcon />
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView>
          <CustomView>
            <CustomText>Verify Your Email </CustomText>
            <CustomText>With A Code</CustomText>
          </CustomView>
          <CustomView>
            <CustomText>
              We sent a code to akinsuyi@hotmail.com -- It
            </CustomText>
            <CustomText>helps us keep your account secure</CustomText>
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomView>
            <CustomText>Verification Code</CustomText>
            <CustomView>
              <CustomInput></CustomInput>
              <CustomInput></CustomInput>
              <CustomInput></CustomInput>
              <CustomInput></CustomInput>
              <CustomInput></CustomInput>
              <CustomInput></CustomInput>
            </CustomView>
          </CustomView>
          <CustomView>
            <CustomText>Resend Code</CustomText>
            <CustomText>Change your email</CustomText>
          </CustomView>
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton onPress={() => navigation.navigate("GetStarted")}>
          <CustomText white bold size={18}>
            Proceed
          </CustomText>
        </CustomButton>
      </CustomView>
    </>
  );
};

export default VerifyEmail;

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
});
