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

const ProjectInformation = ({route}) => {

  const [clientName, setClientName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [superIntendentName, setSuperIntendentName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  var { data } = route?.params
  const navigation = useNavigation()

  const submit = async () => {
      navigation.navigate('AddCollaborators',{data: {...data, client: {clientName, consultantName, superIntendentName}}})
  }

  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <BackIcon />
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
              Project Information
            </CustomText>

            <CustomView column>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Provide the following details for the project
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView margin={[15, 0]} column rowGap={20}>
        <CustomView>
            <CustomInput
            label="Client Name"
            placeholder="Waterview Park"
            onChangeText={setClientName}
            
          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Consultant Name"
            placeholder="Input consultant name"
            
            onChangeText={setConsultantName}
          />
            </CustomView>
            <CustomView>
            <CustomInput
            keyboardType='default'
            label="Superintendent Name"
            placeholder="Input superintendent name"
            // secureTextEntry
            onChangeText={setSuperIntendentName}
          />
            </CustomView>
            {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}
        </CustomView>        
      </ScrollView>
      </KeyboardAvoidingView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton
        disabled={!clientName || !consultantName|| !superIntendentName ||isLoading}
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

export default ProjectInformation

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