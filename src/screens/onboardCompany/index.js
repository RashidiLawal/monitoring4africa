import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, ScrollView } from "react-native";
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
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";


const OnboardCompany= () => {
  const [checked, setChecked] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState();
  const [countrySize, setCountrySize] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [countryModalVisible, setCountryModalVisible] = useState(false)

  const handleToggle = () => {
    setChecked(!checked);
  };
  const saveCountry = () => {


  
  }
  const submit = async () => {
    try {
      setIsLoading(true)
      setError("")
      const callObj = {
        method: 'POST',
        path: 'users/onboardCompany',
        data: { companyName, country, countrySize, phone: country.dial_code + phone }
      };
      const response = await AxiosCall(callObj);
      setIsLoading(false)
      resetStackAndNavigate(navigation,"OnboardSuccess")
    } catch (e) {
      let errorResponse = 'Something went wrong. please try again';
      if (e?.response) {
        const { error } = e.response.data;
        errorResponse = error;
      }
      setIsLoading(false)
      setError(errorResponse)
    }
  }
      return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 15]}>
          <Pressable
            onPress={() => navigation.goBack()}
            shadow
          >
            <BackIcon />
            {/* <SimplelineIcon name="arrow-left" color={'white'} size={15} /> */}
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <CountryModal
        setModalVisible={setCountryModalVisible}
        modalVisible={countryModalVisible}
        submit={setCountry}
      />
      <ScrollView style={styles.container}>
        <CustomView padding={[0, 10]}>
          <CustomView >
            <CustomText size={25} style={styles.text1} spacing={0.5}>Introduce Your Company</CustomText>
            <CustomText size={14} descText>Provide essential details about your company</CustomText>
            <CustomView column margin={[15, 0]}>
              <CustomView rowGap={15} >
                <CustomView >
                  <CustomInput
                    label='Company Name'
                    onChangeText={setCompanyName}
                    placeholder="Enter company name"

                  />
                </CustomView >
                <CustomView >
                  <CustomText size={14} >Country</CustomText>
                  <Pressable onPress={() => setCountryModalVisible(true)}>
                    <CustomView row center space="between" color={COLORS.inputBackground} radius={10} padding={[15, 15]}>
                    {country?.name ?
                      <CustomText   size={14}> {country?.name} </CustomText>
                      : 
                      <CustomText color={COLORS.greyText} size={14}>  Select your company's location </CustomText>
                    }
                      <ArrowDown />
                    </CustomView>
                  </Pressable>
                </CustomView >
                <CustomView >
                  <CustomInput
                    label='Company Size'
                    placeholder="Enter your company's size"
                    keyboardType="number-pad"
                    onChangeText={setCountrySize}
                  />
                </CustomView>
              </CustomView >

              <CustomView columnGap={15} row margin={[15, 0]}>
                <CustomView width={20+'%'}>
                  <CustomInput
                    label='Code'
                    placeholder="+234"
                    keyboardType="number-pad" 
                    value={country?.dial_code}
                    onChangeText={()=>{}}
                  />
                </CustomView>
                <CustomView flexGrow='5'>
                  <CustomInput
                    label='Phone Number'
                    placeholder="Enter phone number"
                    keyboardType="number-pad"
                    onChangeText={setPhone}
                    
                  />
                </CustomView>
              </CustomView> 
              {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}
            </CustomView>
          </CustomView>
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} color='#fff'>
        <CustomButton
        loading={isLoading}
        onPress={submit}
        >
          <CustomText white bold size={18}>Continue</CustomText>
        </CustomButton>
      </CustomView>
    </>
  );
}
export default OnboardCompany;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,

    // paddingBottom: 95,
  },

  text1: {
    color: "#232323",
    fontStyle: "normal",
    fontWeight: "700",
  },
});
