import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
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
import Cancel from '../../../assets/svgs/X.svg'


export default function ProjectSucced() {
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    return (
        <>
         <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <Cancel />
          </Pressable>
        </CustomView>
      </Appbar.Header>
      <CustomView safe flex={1} white>   
            <ScrollView contentContainerStyle={styles.container}>
                <CustomView  flex={1}  bottom padding={[20, 0, 50]}>
                <CustomText heavy center size={25} padding={[10,0]}>
                    All done! Project created Successfully!
                    </CustomText>

                    <CustomText center height={25} descText size={16}>
                    Next is to upload a plan to get started!
                    </CustomText>
                </CustomView>
                

                <CustomView  padding={[0, 0, 40]}>
                    <CustomButton
                        onPress={() => navigation.navigate("OnboardEmployee")}
                    >
                        <CustomText white heavy size={18}>Upload Plan</CustomText>
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
