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

const AddCollaborators = ({route}) => {

  const [collaboratorOne, setCollaboratorOne] = useState("");
  const [collaboratorTwo, setCollaboratorTwo] = useState("");
  const [roleOne, setRoleOne] = useState("");
  const [roleTwo, setRoleTwo] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
console.log(route)
  const navigation = useNavigation()

  const submit = async () => {
    try {
      setIsLoading(true)
      setError("")
      const callObj = {
        method: 'POST',
        path: 'users/newProject',
        data: { collaboratorOne, collaboratorTwo, roleOne, roleTwo}
      };
      const response = await AxiosCall(callObj);
      setIsLoading(false)
      navigation.navigate('AddLabourers')
    } catch (e) {
      let errorResponse = 'Something went wrong. please try again';
      if (e?.response) {
        const { error } = e.response.data;
        errorResponse = error;
      }
      setIsLoading(false)
      setError(errorResponse)
      navigation.navigate('AddLabourers')
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
              Add Collaborators
            </CustomText>

            <CustomView column>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Select or add collaborators for the project
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView margin={[15, 0]} column rowGap={20}>
        <CustomView>
            <CustomInput
            label="Collaborator 1"
            placeholder="Fregusson Matthew"
            onChangeText={setCollaboratorOne}

          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Role"
            placeholder="Select Role"
            onChangeText={setRoleOne}

          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Collaborator 2"
            placeholder="Enter collaborator’s name "
            onChangeText={setCollaboratorTwo}

          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Role"
            placeholder="Select Role"
            onChangeText={setRoleTwo}

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
        disabled={!collaboratorOne || !collaboratorTwo|| !roleOne || !roleTwo ||isLoading}
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

export default AddCollaborators

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