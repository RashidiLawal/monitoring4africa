import React, { useState, useEffect } from "react";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView, Pressable, Platform, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";
import Plus from '../../../assets/svgs/Plus.svg'

const AddOperators = ({route}) => {
  var data = route?.params?.data
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation()

  const [operators, setOperators] = useState([{
    name: "",
    id: 1
  }])


  const onTyping = (text, item, items) => {
    var data = items.map((i) => {
      if (i.id == item.id) {
        i['name'] = text
        return i
      }
      return i
    })
    setOperators(data)
  }
  const submit = async () => {
    navigation.navigate('SubContractors', { data: { ...data, operators  } })
  }

  const checkDisabled = () => {
    var check = false
    operators.map((item)=>{
      if(!item.name) check = true;
    })
  return check
  } 
 
  return (
    <>
    <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView space="between" row flex padding={[0, 15, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()}>
            <BackIcon />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("SubContractors")}>
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
              Add Operators
            </CustomText>

            <CustomView column>
            <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Input operators names for daily reporting
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
               purposes in the project.
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>

        {operators.map((item, key) => (
        <CustomView margin={[15, 0]} column rowGap={20}>
        <CustomView>
            <CustomInput
            label={"Operator "+  (key+1)}
            placeholder="Daniel Peter"
            onChangeText={(text) => onTyping(text, item, operators)}

          />
            </CustomView> 
        </CustomView> 
        ))}
   {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}       
        <TouchableOpacity onPress={()=>setOperators([...operators, {name: '', id: Math.floor(Math.random() * 100000)+1}])}>
        <CustomView row center columnGap={5}>
        <CustomText color={COLORS.orange}>Add New Input field </CustomText>       
        <Plus />
        </CustomView>
        </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton
        disabled={checkDisabled()}
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

export default AddOperators

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