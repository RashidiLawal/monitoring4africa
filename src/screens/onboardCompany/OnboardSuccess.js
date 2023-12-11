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

export default function OnboardSuccess() {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    return (
        <CustomView safe flex={1} white>
            <ScrollView contentContainerStyle={styles.container}>
                <CustomView  flex={1}  bottom padding={[20, 0, 50]}>
                    <CustomText bold center size={25} padding={[10,0]}>
                        All Done, Mike! Next is to Add your Employees here
                    </CustomText>
                    <CustomText center height={25} descText size={16}>
                        You’re a step away from completing your signup. Add employees to access your company’s account
                    </CustomText>
                </CustomView>

                <CustomView  padding={[0, 0, 40]}>
                    <CustomButton
                        onPress={() => navigation.navigate("OnboardEmployee")}
                    >
                        <CustomText white heavy size={18}>Add new Employees</CustomText>
                    </CustomButton>
                    <CustomView center padding={[20, 0]}>
                        <TouchableOpacity  onPress={()=>resetStackAndNavigate(navigation, 'Home')}>
                            <CustomText primary heavy>Skip for Now</CustomText>
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
