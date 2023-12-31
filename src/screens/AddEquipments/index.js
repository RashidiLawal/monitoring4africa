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

const Equipments = () => {
  const [equipmentOne, setEquipmentOne] = useState("");
  const [equipmentTwo, setEquipmentTwo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation()

  const submit = async () => {
    try {
      setIsLoading(true)
      setError("")
      const callObj = {
        method: 'POST',
        path: 'users/newProject',
        data: { equipmentOne, equipmentTwo}
      };
      const response = await AxiosCall(callObj);
      setIsLoading(false)
      navigation.navigate('Materials')
    } catch (e) {
      let errorResponse = 'Something went wrong. please try again';
      if (e?.response) {
        const { error } = e.response.data;
        errorResponse = error;
      }
      setIsLoading(false)
      setError(errorResponse)
      navigation.navigate('Materials')
    }
  }

  return (
    <>
    <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView space="between" row flex padding={[0, 15, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackIcon />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <CustomView row center>
              <CustomText bold size={17} color={COLORS.orange}>
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
              Add Equipments
            </CustomText>

            <CustomView column>
            <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Enter the names of each project equipment.
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView margin={[15, 0]} column rowGap={20}>
            <CustomView>
            <CustomInput
            label="Equipment 1"
            placeholder="400Ltr Jiasung Cement mixer Tiaxing"
            onChangeText={setEquipmentOne}

          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Equipment 2"
            placeholder="200Ltr Jiasung Cement mixer Tiaxing"
            onChangeText={setEquipmentTwo}

          />
            </CustomView> 
            {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null} 
        </CustomView> 
        <CustomView row center columnGap={5}>
        <CustomText color={COLORS.orange}>Add New Input field </CustomText>       
        <Plus />
        </CustomView>
      </ScrollView>
      </KeyboardAvoidingView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton
        disabled={!equipmentOne || !equipmentTwo || isLoading}
        loading={isLoading}
        onPress={submit}
        >
          <CustomText white heavy size={18}>
          Continue
          </CustomText>
        </CustomButton>
      </CustomView>
    </>
  )
}

export default Equipments

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