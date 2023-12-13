import React, { useState, useEffect } from "react";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView, Pressable, Platform, KeyboardAvoidingView } from "react-native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";
import Plus from '../../../assets/svgs/Plus.svg'

const AddLabourers = () => {
    const navigation = useNavigation()
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
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <CustomView column rowGap={17}>
          <CustomView column rowGap={13}>
            <CustomText
              size={27}
              heavier
              color={COLORS.lightBlack}
              spacing={0.5}
            >
              Add Labourers
            </CustomText>

            <CustomView column>
            <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Input the names of the labourers involved in the 
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                project for accurate daily reporting purposes.
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView margin={[15, 0]} column rowGap={20}>
        <CustomView>
            <CustomInput
            label="Labourer 1"
            placeholder="Daniel Peter"
            secureTextEntry
          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Labourer 2"
            placeholder="Rossmund Pike"
            secureTextEntry
          />
            </CustomView>       
        </CustomView> 
        <CustomView row center columnGap={5}>
        <CustomText color={COLORS.orange}>Add New Input field </CustomText>       
        <Plus />
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton onPress={() => navigation.navigate('AddOperators')}>
          <CustomText white heavy size={18}>
          Continue
          </CustomText>
        </CustomButton>
      </CustomView>
      </KeyboardAvoidingView>
    </>
  )
}

export default AddLabourers

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF",
      flexDirection: "column",
      height: "100%",
      paddingHorizontal: 15,
      paddingTop: 5,
      paddingBottom:100,
    },
  });