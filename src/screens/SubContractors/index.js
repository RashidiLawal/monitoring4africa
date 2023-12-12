import React, { useState, useEffect } from "react";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView, Pressable } from "react-native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";
import Plus from "../../../assets/svgs/Plus.svg";

const SubContractors = () => {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView space="between" row flex padding={[0, 15, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackIcon />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <CustomView row center>
              <CustomText bold size="17" color={COLORS.orange}>
                Skip for now
              </CustomText>
            </CustomView>
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView column rowGap={17}>
          <CustomView column rowGap={13}>
            <CustomText
              size={27}
              heavier
              color={COLORS.lightBlack}
              spacing={0.5}
            >
              Add Subcontractors
            </CustomText>

            <CustomView column>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Input operators names for daily reporting
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                purposes in the project.
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView margin={[15, 0]}>
          <CustomText heavier size={17}>Subcontractor 1</CustomText>
          <CustomView row wrap rowGap="25" columnGap="20">
            <CustomView flexGrow="1" width="40%">
              <CustomInput
                label="Operator 1"
                placeholder="Daniel Peter"
                secureTextEntry
              />
            </CustomView>
            <CustomView flexGrow="1" width="40%">
              <CustomInput
                label="Operator 2"
                placeholder="Rossmund Pike"
                secureTextEntry
              />
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView margin={[15, 0]}>
          <CustomText heavier size={17}>Subcontractor 2</CustomText>
          <CustomView row wrap rowGap="25" columnGap="20">
            <CustomView flexGrow="1" width="40%">
              <CustomInput
                label="Operator 1"
                placeholder="Daniel Peter"
                secureTextEntry
              />
            </CustomView>
            <CustomView flexGrow="1" width="40%">
              <CustomInput
                label="Operator 2"
                placeholder="Rossmund Pike"
                secureTextEntry
              />
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView row center columnGap={5}>
          <CustomText color={COLORS.orange}>Add New Input field </CustomText>
          <Plus />
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton onPress={() => navigation.navigate("SubContractorSuccess")}>
          <CustomText white heavy size={18}>
            Continue
          </CustomText>
        </CustomButton>
      </CustomView>
    </>
  );
};

export default SubContractors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: 5,
  },
});
