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


export default function OnboardEmployeeSuccess() {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
  
    return (
        <CustomView safe flex={1} white>
            <ScrollView contentContainerStyle={styles.container}>
                <CustomView  flex={1}  bottom padding={[20, 0, 50]}>
                    <CustomText bold center size={25} padding={[10,0]}>
                        Employee(s) Addded Successfully!
                    </CustomText>
                    <CustomText center height={25} descText size={16}>
                    Invite link sent to email. Do you still want to add more employees on this project?
                    </CustomText>
                </CustomView>

                <CustomView  padding={[0, 0, 40]}>
                    <CustomButton
                        onPress={() => navigation.navigate("OnboardEmployee")}
                    >
                        <CustomText white heavy size={18}>Add More Employees</CustomText>
                    </CustomButton>
                    <CustomView center padding={[20, 0]}>
                        <TouchableOpacity  onPress={()=>resetStackAndNavigate(navigation, 'Home')}>
                            <CustomText primary heavy>Back to Dashboard</CustomText>
                        </TouchableOpacity>
                    </CustomView>
                </CustomView>
            </ScrollView>

        </CustomView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});
