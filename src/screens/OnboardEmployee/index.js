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
import { resetStackAndNavigate } from "../../../utils";
import AxiosCall from "../../../utils/axios";


export default function OnboardEmployee() {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([{
    email: "",
    id: 1
}])

const onTyping = (text, item, items) => {
  var data = items.map((i)=> {
    if(i.id == item.id) {
       i.email = text
       return i
    }
    return i
  })
  setItems(data)
}
const submit = async () => {
  try {
    setIsLoading(true)
    setError("")
    const callObj = {
      method: 'POST',
      path: 'users/addEmployee',
      data: { employees: items }
    };
    const response = await AxiosCall(callObj);
    setIsLoading(false)
    resetStackAndNavigate(navigation,"OnboardEmployeeSuccess")
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
        <CustomView padding={[0, 20]} flex={1} row space="between">
          <Pressable
            onPress={() => navigation.goBack()}
            shadow
            padding={[10]}
            margin={[0, 20]}
          >
            <BackIcon />
            {/* <SimplelineIcon name="arrow-left" color={'white'} size={15} /> */}
          </Pressable>
          <TouchableOpacity onPress={()=>resetStackAndNavigate(navigation, 'Home')}>
            <CustomText color="red">Skip for now</CustomText>
          </TouchableOpacity>
        </CustomView>
      </Appbar.Header>
 
      <ScrollView style={styles.container}>
        <CustomView >
          <CustomView >
            <CustomText size={25} heavy>Add Employee(s)</CustomText>
            <CustomText size={14} descText>Fill to invite your employee(s) to your account.</CustomText>
            <CustomView column margin={[15, 0]}>
              <CustomView rowGap={15} >
               {items.map((item, key)=> (
                 <CustomView  key={key}>
                 <CustomInput
                   onChangeText={(text)=>onTyping(text, item, items)}
                   label='Email'

                   placeholder="Enter employee's email"

                 />
               </CustomView >
               ))}
               

            </CustomView>
            <TouchableOpacity onPress={()=>setItems([...items, {email: '', id: Math.floor(Math.random() * 100000)+1}])}>
              <CustomText color="red" margin={[10, 0]}> Add extra employee +</CustomText>
            </TouchableOpacity>
            </CustomView>
            {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}
          </CustomView>
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} color='#fff'>
        <CustomButton
        loading={isLoading}
        disabled={isLoading || items[0].email == ""}
          onPress={submit}
        >
          <CustomText white heavy size={18}>Add new Employee's</CustomText>
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
    paddingHorizontal: 20,
    paddingTop: 10,

    // paddingBottom: 95,
  },
});
