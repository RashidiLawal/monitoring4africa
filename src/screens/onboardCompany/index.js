import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput,  TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import { Appbar } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../../components/ui/CustomButton";
import CustomText from "../../components/ui/CustomText";
import CustomView from "../../components/ui/CustomView";
import { COLORS } from "../../store/constant/theme";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import ArrowDown from "../../../assets/svgs/ArrowDown.svg";
import CustomInput from "../../components/ui/CustomInput";
import CountryModal from "../../components/ui/CountryModal";


export default function OnboardCompany() {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const [countryModalVisible, setCountryModalVisible] = useState(false)

  const handleToggle = () => {
    setChecked(!checked);
  };
  const saveCountry = () => {

  }
  return (
    <>   
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 10]}>
        <Pressable
          onPress={() => navigation.goBack()}
          shadow
          padding={[10]}
          margin={[0, 20]}
        >
          <BackIcon />
          {/* <SimplelineIcon name="arrow-left" color={'white'} size={15} /> */}
        </Pressable>
        </CustomView>
      </Appbar.Header>
      <CountryModal
      setModalVisible={setCountryModalVisible}
      modalVisible={countryModalVisible}
      submit={saveCountry}
      />
      <ScrollView style={styles.container}>
      <CustomView >
        <CustomView >
          <CustomText size={20} weight="500" >Introduce Your Company</CustomText>
          <CustomText size={14} descText>Provide essential details about your company</CustomText>
          <CustomView  column margin={[15, 0]}>
            <CustomView   rowGap={15} >               
            <CustomView >
            <CustomInput

              label='Company Name'

              placeholder="Enter company name"

              />
            </CustomView > 
            <CustomView >
            <CustomText size={14} >Country</CustomText>
                <Pressable onPress={()=>setCountryModalVisible(true)}>
                <CustomView row center space="between" color={COLORS.inputBackground} radius={10} padding={[15,20]}>
                    <CustomText color={COLORS.greyText} size={14}> Select your company's location </CustomText>
                    <ArrowDown />
                </CustomView>
                </Pressable>
            </CustomView >                  
                <CustomView >
                <CustomInput
                  label='Company Size'
                  placeholder="Enter your company's size"
                    keyboardType="number-pad"
                 
                />
                </CustomView>               
             
            </CustomView >
                   
             <CustomView columnGap={15} row margin={[15, 0]}>
             <CustomView  flexGrow='1'>
                <CustomInput
                  label='Code'
                  placeholder="+234"
                    keyboardType="number-pad"
                 
                />
                </CustomView>  
             <CustomView  flexGrow='5'>
                <CustomInput
                  label='Phone Number'
                  placeholder="Enter phone number"
                    keyboardType="number-pad"
                 
                />
                </CustomView>     
             </CustomView>
            
          </CustomView>
        </CustomView> 
      </CustomView>   
      </ScrollView>
      <CustomView padding={[20, 20, 35]} color='#fff'>
      <CustomButton
        onPress={() => navigation.navigate("OnboardCompany")}
      >
        <CustomText white bold size={18}>Continue</CustomText>
      </CustomButton>  
      </CustomView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 10,
    
    // paddingBottom: 95,
  },
  text1: {
    color: "#232323",
    fontSize: 27,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 1,
  },
  textAndInputs: {
    flexDirection: "column",
    rowGap: 30,
  },
  topHolder: {
    flexDirection: "column",
    rowGap: 25,
  },
  checkBoxAnd: {
    flexDirection: "column",
    rowGap: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    columnGap: 15,
  },
  inputBox: {
    width: "48%",
  },
  inputBox1: {
    width: "100%",
  },
  label: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F5F8FA",
    // borderColor: "#31AEE8",
    // borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  textFailed: {
    marginTop: 10,
    color:'#EA5540',
    fontSize: 13,
    fontWeight: "500",
  },
  checkBoxView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap:7,
  },
  texts: {
    flexDirection: "row",
    columnGap: 5,
  },
  texts1: {
    fontSize: 13.5,
    color: "#EA5540",
  },
  texts2: {
    fontSize: 13.5,
    color: "#8A9BA3", 
  },
  button1: {
    borderRadius: 10,
    paddingBottom: 17,
    paddingTop: 15,
    width: "102%",
  },
  textInPres1: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },  
});
