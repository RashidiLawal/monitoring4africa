import React, { useState, useEffect } from "react";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import CustomInput from "../../components/ui/CustomInput";
import CustomButton from "../../components/ui/CustomButton";
import { Appbar } from "react-native-paper";
import { StyleSheet, ScrollView, Pressable, Platform, KeyboardAvoidingView } from "react-native";
import BackIcon from "../../../assets/svgs/ArrowLeft.svg";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../store/constant/theme";
import AxiosCall from "../../../utils/axios";
import { resetStackAndNavigate } from "../../../utils";
import Plus from "../../../assets/svgs/Plus.svg";
import { TouchableOpacity } from "react-native";

const SubContractors = ({route}) => {
  var  data  = route?.params?.data
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation()
  const [subContractors, setSubContractors] = useState([{
    name: "",
    description: "",
    id: 1
  }])


  const onTyping = (text, item, items, type) => {
    var data = items.map((i) => {
      if (i.id == item.id) {
        i[type] = text
        return i
      }
      return i
    })
    setSubContractors(data)
  }
  const submit = async () => {
    navigation.navigate('SubContractorSuccess', { data: { ...data, subContractors  } })
  }

  const checkDisabled = () => {
    var check = false
    subContractors.map((item)=>{
      if(!item.name || !item.description) check = true;
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

          <Pressable onPress={() => navigation.navigate("SubContractorSuccess")}>
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
              Add Subcontractors
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
        {subContractors.map((item, key) => (
       
         <CustomView margin={[15, 0]}>
         <CustomText heavier size={17}>Subcontractor {key+1}</CustomText>
         <CustomView row wrap rowGap="25" columnGap="20">
           <CustomView flexGrow="1" width="40%">
             <CustomInput
               label="Name "
               placeholder="Enter name"
            onChangeText={(text) => onTyping(text, item, subContractors, 'name')}

             />
           </CustomView>
           <CustomView flexGrow="1" width="40%">
             <CustomInput
               label="Description "
               placeholder="Enter description"
               onChangeText={(text) => onTyping(text, item, subContractors, 'description')}

             />
           </CustomView>
         </CustomView>
       </CustomView> 
        ))}
       
        {error ? 
                <CustomText size={14} color='red'>
                  {error}
                  </CustomText> 
                  : null}   
        <TouchableOpacity onPress={()=>setSubContractors([...subContractors, {name: '', description: '' , id: Math.floor(Math.random() * 100000)+1}])}>
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
  );
};

export default SubContractors;

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
