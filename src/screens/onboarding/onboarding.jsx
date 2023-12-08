import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput,  TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import { Appbar } from "react-native-paper";
import SimplelineIcon from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../../components/ui/CustomButton";
import CustomText from "../../components/ui/CustomText";
import CustomView from "../../components/ui/CustomView";
import { COLORS } from "../../store/constant/theme";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import CustomInput from "../../components/ui/CustomInput";


export default function Onboarding() {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>   
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Pressable
          onPress={() => navigation.goBack()}
          shadow
          padding={[10]}
          margin={[0, 20]}
        >
          <BackIcon />
          {/* <SimplelineIcon name="arrow-left" color={'white'} size={15} /> */}
        </Pressable>

        <CustomView center padding={[0]}>
          {/* <CustomText>
                       Supplies needed
                    </CustomText> */}
        </CustomView>
        <TouchableOpacity style={{ marginRight: 30 }}>
          {/* <Entypo name="dots-three-horizontal" size={20} /> */}
          <CustomView row center>
            <CustomText margin={[0, 5]}>Switch to</CustomText>
            <CustomText color={COLORS.orange}>Log In</CustomText>
          </CustomView>
        </TouchableOpacity>
      </Appbar.Header>
      <View style={styles.container}>
      <View style={styles.checkBoxAnd}>
        <View style={styles.textAndInputs}>
          <Text style={styles.text1}>Let’s get to know You</Text>
          <CustomView  column >
            <CustomView row wrap columnGap='15' rowGap='25'>               
            <CustomView flexGrow='1' >
            <CustomInput

              label='First Name'

              placeholder="Enter First Name"

              />
            </CustomView > 
            <CustomView flexGrow='1' >
            <CustomInput

              label='First Name'

              placeholder="Enter First Name"

              />
            </CustomView >                  
                <CustomView  flexGrow='1'>
                <CustomInput
                  label='Last Name'
                  placeholder="Enter Last Name"
                 
                />
                </CustomView>               
             
            </CustomView >
            <View style={styles.inputBox1}>
              <Text style={styles.label}>Work Email</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                placeholderTextColor="#8A9BA3"
              />
              <Text style={styles.textFailed}>Wrong email ID, try again</Text>
            </View>
            
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
      <Pressable
        onPress={() => navigation.navigate("Login")}
        style={({ pressed }) => [
          styles.button1,
          { backgroundColor: pressed ? "#bee5ed" : "#31AEE8" },
        ]}
      >
        <Text style={styles.textInPres1}>Continue</Text>
      </Pressable>     
    </View>
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
