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

const AddLabourers = ({route}) => {
  var  data  = route?.params?.data
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation()

  const [labourers, setLabourers] = useState([{
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
    setLabourers(data)
  }
  const submit = async () => {
    navigation.navigate('AddOperators', { data: { ...data, labourers  } })
  }

  const checkDisabled = () => {
    var check = false
    labourers.map((item)=>{
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

          <Pressable onPress={() => navigation.navigate("AddOperators")}>
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
              Add Labourers
            </CustomText>

            <CustomView column>
            <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                Input the names of the labourers involved in the 
              </CustomText>
              <CustomText
                size={14.5}
                color={COLORS.midGrey}
                spacing={0.5}
                height={18}
              >
                project for accurate daily reporting purposes.
              </CustomText>
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView margin={[15, 0]} column rowGap={20}>
       {labourers.map((item, key) => (
        <CustomView  key={key}>
            <CustomInput
            label={"Labourer " +  (key+1)}
            placeholder="Daniel Peter"
            onChangeText={(text) => onTyping(text, item, labourers)}

          />
            </CustomView> 
       ))}
            </CustomView> 
            {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}      
        <TouchableOpacity onPress={()=>setLabourers([...labourers, {name: '', id: Math.floor(Math.random() * 100000)+1}])}>
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

export default AddLabourers

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