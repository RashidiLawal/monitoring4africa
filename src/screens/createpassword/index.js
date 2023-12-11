import React from "react";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView, Pressable } from "react-native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import GreenCheck from "../../../assets/svgs/CheckG.svg";
import Cancel from "../../../assets/svgs/X.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";

const CreatePassword = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <BackIcon />
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView column rowGap={17}>
          <CustomView column rowGap={13}>
          <CustomText size={27} heavier color={COLORS.lightBlack} spacing={0.5}>
            Create Your Password
          </CustomText>
          
            <CustomView column>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Choose a strong password that you can
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                remember
              </CustomText>
            </CustomView>
          </CustomView>
          <CustomInput label="Password" placeholder="*************" />
        </CustomView>
        <CustomView column>
          <CustomView row>
            <CustomView row center columnGap={3}>
              <GreenCheck />
              <CustomText size={14}>Has at least 8 characters</CustomText>
            </CustomView>
            <CustomView row center columnGap={3}>
              <GreenCheck />
              <CustomText size={14}>Has an uppercase letter</CustomText>
            </CustomView>
          </CustomView>
          <CustomView row>
            <CustomView row center columnGap={3}>
              <Cancel />
              <CustomText size={14}>Has a number</CustomText>
            </CustomView>
            <CustomView row center columnGap={3}>
              <Cancel />
              <CustomText size={14}>Has a symbol</CustomText>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomInput label="Confirm Password" placeholder="*************" />
          <CustomInput
            label="Referral Code (Optional)"
            placeholder="Enter referral code if any"
          />
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton onPress={() => navigation.navigate("VerifyEmail")}>
          <CustomText white bold size={18}>
            Proceed
          </CustomText>
        </CustomButton>
      </CustomView>
    </>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: 5,
  },
});
