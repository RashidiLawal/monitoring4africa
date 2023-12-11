import React, { useState , useEffect} from "react";
import { StyleSheet, Text, View, Pressable, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import { ActivityIndicator, Appbar } from "react-native-paper";
import SimplelineIcon from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../../components/ui/CustomButton";
import CustomText from "../../components/ui/CustomText";
import CustomView from "../../components/ui/CustomView";
import { COLORS } from "../../store/constant/theme";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import CustomInput from "../../components/ui/CustomInput";
import CreatePassword from "../createpassword";
import AxiosCall from "../../../utils/axios";


const Signup = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailAvailable, setEmailAvailable] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=>{
    if(email){
       checkForAvailablility()
    }
  }, [email])

  const handleToggle = () => {
    setChecked(!checked);
  }; 
  const checkForAvailablility =  async () => {
      try {
        setIsLoading(true)
        setError("")
        const callObj = {
          method: 'POST',
          path:  'users/emailAvailability',
          data: {email}
        };
        const response = await AxiosCall(callObj);
        setEmailAvailable(true)
        setIsLoading(false)
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
        <CustomView space="between" row flex padding={[0, 15, 0, 5]}>
        <Pressable onPress={() => navigation.goBack()}>
            <BackIcon />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <CustomView row center>
              <CustomText margin={[0, 5]} bold size="15">
                Switch to
              </CustomText>
              <CustomText bold size="15" color={COLORS.orange}>
                Log In
              </CustomText>
            </CustomView>
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <View style={styles.checkBoxAnd}>
          <View style={styles.textAndInputs}>
            <Text style={styles.text1}>Let’s get to know You</Text>
            <CustomView column >
              <CustomView row wrap rowGap='25' columnGap={15}>
                <CustomView flexGrow='1' width={45+'%'}>
                  <CustomInput
                    label='First Name'
                    placeholder="Enter First Name"
                    onChangeText={setFirstName}
                  />
                </CustomView > 
                <CustomView flexGrow='1' width={45+'%'}  >
                  <CustomInput
                    label='Last Name'
                    placeholder="Enter Last Name"
                    onChangeText={setLastName}
                  />
                </CustomView>
                <CustomView style={styles.inputBox1}>
                  <CustomInput
                    label="Work email"
                    placeholder="example@gmail.com"
                    onChangeText={setEmail}
                  />
                  {isLoading ?<CustomView row> 
                  <ActivityIndicator size={14} color={COLORS.descText}/> 
                  <CustomText margin={[0, 5]} size={14} descText>checking for availability</CustomText></CustomView>: null}
                  {error ? <Text style={styles.textFailed}>{error}</Text> : null}
                  {emailAvailable ? <CustomText size={14} color={COLORS.success}>Email is available</CustomText> : null}
                </CustomView>
              </CustomView >


            </CustomView>
          </View>
          <View style={styles.checkBoxView}>
            <CheckBox
              onClick={() => handleToggle()}
              style={styles.checkBox}
              isChecked={checked}
              checkBoxColor='#EA5540'
              checkedCheckBoxColor="#EA5540"
              uncheckedCheckBoxColor="#EA5540"
            />
            <View style={styles.texts}>
              <Text style={styles.texts2}>I agree to the</Text>
              <Text style={styles.texts1}>terms & condition</Text>
              <Text style={styles.texts2}>and</Text>
              <Text style={styles.texts1}>privacy policy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} color='#fff'>
        <CustomButton
        disabled={!checked || !firstName || !lastName || !email}
          onPress={() => navigation.navigate("CreatePassword", {firstName, lastName, email})}
        >
          <CustomText white bold size={18}>Continue</CustomText>
        </CustomButton>
      </CustomView>
    </>
  );
}

export default Signup;

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
    color: "",
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
    color: '#EA5540',
    fontSize: 13,
    fontWeight: "500",
  },
  checkBoxView: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 7,
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
