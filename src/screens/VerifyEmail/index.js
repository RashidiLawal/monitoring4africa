import React,{useState} from "react";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import { StyleSheet, Pressable, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import GetStarted from "../started";
import { COLORS } from "../../store/constant/theme";
import OTPInputView from "@twotalltotems/react-native-otp-input"
import AxiosCall from "../../../utils/axios";
import GreenCheck from "../../../assets/svgs/CheckGreen.svg";
import { resetStackAndNavigate } from "../../../utils";
import { connect, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshProfile } from '../../store/actions/profile';

const VerifyEmail = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const email = route?.params?.email
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");
  const [resendEmailStatus, setResendEmailStatus] = useState(false);
  const [error, setError] = useState("");
  const submit = async (code) => {
    try {
      setIsLoading(true)
      setResendEmailStatus(false)
      setError("")
      setCode(code)
      const callObj = {
        method: 'POST',
        path: 'users/verifyEmail',
        data: { code: code, email}
      }
      const response = await AxiosCall(callObj);
      setIsLoading(false)
      var {userData, token} = response
      dispatch(refreshProfile(userData))
      AsyncStorage.setItem('token', token)
      AsyncStorage.setItem('userData', JSON.stringify(userData))
     resetStackAndNavigate( navigation, "OnboardCompany")
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

  const resendEmail = async () => {
    try {
      setIsLoading(true)
      setError("")
      setResendEmailStatus(false)
      const callObj = {
        method: 'POST',
        path: 'users/resendVerificationCode',
        data: {email}
      }
      const response = await AxiosCall(callObj);
      setIsLoading(false)
      setResendEmailStatus(true)
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
      <Appbar.Header>
        <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <BackIcon />
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <CustomView column rowGap={28}>
        <CustomView column rowGap={17}>
          <CustomView column rowGap={2}>
            <CustomText
              size={27}
              heavier
              color={COLORS.lightBlack}
              spacing={0.5}
            >
              Verify Your Email{" "}
            </CustomText>
            <CustomText
              size={27}
              heavier
              color={COLORS.lightBlack}
              spacing={0.5}
            >
              With A Code
            </CustomText>
          </CustomView>
          <CustomView column rowGap={2}>
            <CustomText
              size={14.5}
              color={COLORS.midGrey}
              spacing={0.5}
              height={18}
            >
              We sent a code to {route?.params?.email} -- It
            </CustomText>
            <CustomText
              size={14.5}
              color={COLORS.midGrey}
              spacing={0.5}
              height={18}
            >
              helps us keep your account secure
            </CustomText>
          </CustomView>
        </CustomView>
        <CustomView column rowGap={18}>
          <CustomView column rowGap={10}>
            <CustomText
              size={14.5}
              color={COLORS.lightBlack}
              spacing={0.5}
              height={18}
            >
              Verification Code
            </CustomText>
            {resendEmailStatus ? 
            <CustomView row>
            <GreenCheck />
             <CustomText
              size={14}
              color={COLORS.green}
              spacing={0.5}
              height={18}
            > 
              Email has been resent successfully
            </CustomText> 
            </CustomView>: null}
        {error ? <CustomText size={14} color="red">{error}</CustomText> : null}
            <OTPInputView 
                    style={{width: '80%', height: 100, marginLeft: '10%'}}
                    autoFocusOnLoad
                    pinCount={4} 
                    keyboardType="number-pad"
                    editable
                    codeInputFieldStyle={{backgroundColor: COLORS.inputBackground}}
                    onCodeFilled={submit}
                    />
          
          </CustomView>
          <CustomView row spaced columnGap={130}>
           <Pressable onPress={resendEmail}>
           <CustomText color={COLORS.orange}>Resend Code</CustomText>
           </Pressable>
            {/* <CustomText color={COLORS.orange}>Change your email</CustomText> */}
          </CustomView>
        </CustomView>
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton loading={isLoading} disabled={isLoading} onPress={()=>submit(code)}>
          <CustomText white bold size={18}>
            Proceed
          </CustomText>
        </CustomButton>
      </CustomView>
      </KeyboardAvoidingView>
    </>
  );
};

export default VerifyEmail;

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
    paddingBottom:100,
    // paddingBottom: 95,
  },
});
