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
import { COLORS } from "../../store/constant/theme";

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
        <CustomView column rowGap={28}>
        <CustomView column rowGap={17}>
          <CustomView column rowGap={2}>
            <CustomText
              size={27}
              heavier
              color={COLORS.lightBlack}
              spacing={0.5}
            >
              Verify Your Email{" "}
            </CustomText>
            <CustomText
              size={27}
              heavier
              color={COLORS.lightBlack}
              spacing={0.5}
            >
              With A Code
            </CustomText>
          </CustomView>
          <CustomView column rowGap={2}>
            <CustomText
              size={14.5}
              color={COLORS.midGrey}
              spacing={0.5}
              height={18}
            >
              We sent a code to akinsuyi@hotmail.com -- It
            </CustomText>
            <CustomText
              size={14.5}
              color={COLORS.midGrey}
              spacing={0.5}
              height={18}
            >
              helps us keep your account secure
            </CustomText>
          </CustomView>
        </CustomView>
        <CustomView column rowGap={18}>
          <CustomView column rowGap={10}>
            <CustomText
              size={14.5}
              color={COLORS.lightBlack}
              spacing={0.5}
              height={18}
            >
              Verification Code
            </CustomText>
            <CustomView row wrap rowGap="25" columnGap={15}>
              <CustomView flexGrow="1">
                <CustomInput numberOfCharacters={1} />
              </CustomView>
              <CustomView flexGrow="1">
                <CustomInput numberOfCharacters={1} />
              </CustomView>
              <CustomView flexGrow="1">
                <CustomInput numberOfCharacters={1} />
              </CustomView>
              <CustomView flexGrow="1">
                <CustomInput numberOfCharacters={1} />
              </CustomView>
              <CustomView flexGrow="1">
                <CustomInput numberOfCharacters={1} />
              </CustomView>
              <CustomView flexGrow="1">
                <CustomInput numberOfCharacters={1} />
              </CustomView>
            </CustomView>
          </CustomView>
          <CustomView row spaced columnGap={130}>
            <CustomText color={COLORS.orange}>Resend Code</CustomText>
            <CustomText color={COLORS.orange}>Change your email</CustomText>
          </CustomView>
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
