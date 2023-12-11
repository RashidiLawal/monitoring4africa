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
        <CustomView column rowGap={17}>
          <CustomView column rowGap={13}>
          <CustomText size={27} heavier color={COLORS.lightBlack} spacing={0.5}>
            Create Your Password
          </CustomText>
          
            <CustomView column>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Choose a strong password that you can
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                remember
              </CustomText>
            </CustomView>
          </CustomView>
          <CustomInput label="Password" placeholder="*************" />
        </CustomView>
        <CustomView column>
          <CustomView row>
            <CustomView row center columnGap={3} margin={[0, 3, 0, 0]}>
              <GreenCheck />
              <CustomText size={14} color={COLORS.lightgrey}>Has at least 8 characters</CustomText>
            </CustomView>
            <CustomView row center columnGap={3}>
              <GreenCheck />
              <CustomText size={14} color={COLORS.lightgrey}>Has an uppercase letter</CustomText>
            </CustomView>
          </CustomView>
          <CustomView row>
            <CustomView row center columnGap={3} margin={[0, 3, 0, 0]}>
              <Cancel />
              <CustomText size={14} color={COLORS.lightgrey}>Has a number</CustomText>
            </CustomView>
            <CustomView row center columnGap={3}>
              <Cancel />
              <CustomText size={14} color={COLORS.lightgrey}>Has a symbol</CustomText>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView margin={[15,0]}>
          {/* <CustomInput label="Confirm Password" placeholder="*************" /> */}
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
  container: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: 5,
  },
});
