import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import { Appbar } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../../components/ui/CustomButton";
import CustomText from "../../components/ui/CustomText";
import CustomView from "../../components/ui/CustomView";
import CustomInput from "../../components/ui/CustomView";
import { COLORS } from "../../store/constant/theme";
import { resetStackAndNavigate } from "../../../utils";
import Close from '../../../assets/svgs/Close.svg'
import Plus from '../../../assets/svgs/Plus.svg'

const ProjectScreen = () => {

    // const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
  return (
    <>
     <Appbar.Header style={{ backgroundColor: "#083145" }}>
        <CustomView space="between" row flex padding={[0, 15, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()}>
            <Close />
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
              PROJECT SCREEN
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
            secureTextEntry
          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Role"
            placeholder="Select Role"
            secureTextEntry
          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Collaborator 2"
            placeholder="Enter collaborator’s name "
            secureTextEntry
          />
            </CustomView>
            <CustomView>
            <CustomInput
            label="Role"
            placeholder="Select Role"
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
        <CustomButton onPress={() => navigation.navigate('AddLabourers')}>
          <CustomText white heavy size={18}>
          Continue
          </CustomText>
        </CustomButton>
      </CustomView>
      </KeyboardAvoidingView>
    </>
  )
}

export default ProjectScreen

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