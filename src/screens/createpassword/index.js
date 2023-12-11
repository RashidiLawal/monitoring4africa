import React, {useState, useEffect} from "react";
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
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";


const CreatePassword = ({route}) => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const [referral, setReferral] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
 
  useEffect(() => {
      if (password && cPassword && password != cPassword) {
        setError("Password does not match")
      }  else setError('')
  }, [password, cPassword])
  
  
  const submit = async () => {
    try {
      setIsLoading(true)
      setError("")
      const callObj = {
        method: 'POST',
        path: 'users/signup',
        data: { ...route.params, password, userType: 'employer' , referral}
      }
      const response = await AxiosCall(callObj);
      setIsLoading(false)
     resetStackAndNavigate( navigation, "VerifyEmail")
    } catch (e) {
      let errorResponse = 'Something went wrong. please try again';
      if (e.response) {
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
      <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <BackIcon />
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView>
          <CustomView>
            <CustomText size={25} heavy  spacing={.5}>
              Create Your Password
            </CustomText>
            <CustomText size={15} descText  >
              Choose a strong password that you can remember
            </CustomText>
          </CustomView>
          <CustomView padding={[10, 0]}>
          <CustomInput
           label='Password'
           placeholder='*************'
           secureTextEntry
           onChangeText={setPassword}
          />
          </CustomView>
        </CustomView>
        <CustomView column>
          <CustomView row>
            <CustomView row center>
              <GreenCheck />
              <CustomText size={14}>Has at least 8 characters</CustomText>
            </CustomView>
            <CustomView row center>
              <GreenCheck />
              <CustomText size={14}>Has an uppercase letter</CustomText>
            </CustomView>
          </CustomView>
          <CustomView row>
            <CustomView row center>
              <Cancel />
              <CustomText size={14}>Has a number</CustomText>
            </CustomView>
            <CustomView row center>
              <Cancel />
              <CustomText size={14}>Has a symbol</CustomText>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView margin={[15,0]}>
          <CustomInput
          label='Confirm Password'
          placeholder='*************'
          onChangeText={setCpassword}
          secureTextEntry
          />
          
        </CustomView>
        <CustomView >
        <CustomInput
          label='Referral Code (Optional)'
          placeholder='Enter referral code if any'
          onChangeText={setReferral}
          />
        </CustomView>
        {error ? <CustomText size={14} color="red">{error}</CustomText> : null}
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
      <CustomButton 
        loading={isLoading}
          disabled={!cPassword || !password || password != cPassword || isLoading}
          onPress={submit}>
          <CustomText white heavy size={18}>
            Proceed
          </CustomText>
      </CustomButton>
      </CustomView>
    </>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
    body: {
      justifyContent: "space-between",
      height: "100%",
  
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 95,
    },
    container: {
      backgroundColor: "#FFF",
      flexDirection: "column",
      height: "100%",
      paddingHorizontal: 15,
      paddingTop: 5,
  
      // paddingBottom: 95,
    },
  });
  