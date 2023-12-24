import React, { useState, useEffect } from "react";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import GreenCheck from "../../../assets/svgs/CheckGreen.svg";
import Cancel from "../../../assets/svgs/Cancel.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";

const NewProject = () => { 
  const [projectName, setProjectName] = useState("");
  const [address, setAddress] = useState();
  const [city, setCity] = useState("");
  const [state, setstate] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const submit = async () => {
    try {
      setIsLoading(true)
      setError("")
      const callObj = {
        method: 'POST',
        path: 'users/newProject',
        data: { projectName, address, city, state }
      };
      const response = await AxiosCall(callObj);
      setIsLoading(false)
      navigation.navigate('ProjectInformation')
    } catch (e) {
      let errorResponse = 'Something went wrong. please try again';
      if (e?.response) {
        const { error } = e.response.data;
        errorResponse = error;
      }
      setIsLoading(false)
      setError(errorResponse)
      navigation.navigate('ProjectInformation')
    }
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
              Create new Project
            </CustomText>

            <CustomView column>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Simply fill in your project's details to
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                get started effortlessly.
              </CustomText>
            </CustomView>
          </CustomView>
          <CustomInput
          label="Project name"
          onChangeText={setProjectName}
          placeholder="Waterview Park"
          />
        </CustomView>
        <CustomView margin={[15, 0]}>
          <CustomInput
          onChangeText={setAddress}
            label="Project Address"
            placeholder="12, Ocean Street, Earth, VE 290123"
            
          />
        </CustomView>
        <CustomView row wrap rowGap="25" columnGap='20'>
          <CustomView flexGrow="1" width='40%'>
            <CustomInput
            onChangeText={setCity}
              label="City"
              placeholder="Venus"
            />
          </CustomView>
          <CustomView flexGrow="1" width='40%'>
            <CustomInput
            onChangeText={setstate}
              label="State"
              placeholder="Earth"
            />
          </CustomView>
          <CustomView flexGrow="1" width='40%'>
            <CustomInput
              label="Start Date"
              placeholder="Select start date"
            />
          </CustomView>
          <CustomView flexGrow="1" width='40%'>
            <CustomInput
              label="End Date"
              placeholder="Select end date"
            />
          </CustomView>
        </CustomView>
        {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton
        disabled={!projectName || !address|| !city || !state ||isLoading}
        loading={isLoading}
        onPress={submit}
        >
          <CustomText white heavy size={18}>
          Continue
          </CustomText>
        </CustomButton>
        </CustomView>
      </KeyboardAvoidingView>
      
    </>
  );
};

export default NewProject;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#FFF",
      flexDirection: "column",
      height: "100%",
      paddingHorizontal: 15,
      paddingTop: 5,
      paddingBottom: 100,
      
    },
  });
