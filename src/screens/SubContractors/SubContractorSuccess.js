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
import { resetStackAndNavigate } from "../../../utils";
import CloseGrey from '../../../assets/svgs/CloseGrey.svg'


export default function SubContractorSuccess() {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    return (
        <>
         <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <CloseGrey />
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <CustomView safe flex={1} white>   
            <ScrollView contentContainerStyle={styles.container}>
                <CustomView  flex={1}  bottom padding={[20, 0, 50]}>
                <CustomText heavy center size={25} padding={[10,0]}>
                    Almost there! Next is to Add equipments and materials
                    </CustomText>

                    <CustomText center height={25} descText size={16}>
                    Add equipments and materials to the project you have created
                    </CustomText>
                </CustomView>

                <CustomView  padding={[0, 0, 40]}>
                    <CustomButton
                        onPress={() => navigation.navigate("Equipments")}
                    >
                        <CustomText white heavy size={18}>Add Equipments</CustomText>
                    </CustomButton>
                    <CustomView center padding={[20, 0]}>
                        <TouchableOpacity  onPress={()=>resetStackAndNavigate(navigation, 'Home')}>
                            <CustomText primary heavy>Skip for Now</CustomText>
                        </TouchableOpacity>
                    </CustomView>
                </CustomView>
            </ScrollView>

        </CustomView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});
