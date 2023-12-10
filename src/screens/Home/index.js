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
import Notifications from "../../../assets/svgs/Notifications.svg";
import Report from "../../../assets/svgs/Report.svg";
import UploadPlans from "../../../assets/svgs/UploadPlans.svg";
import Folder from "../../../assets/svgs/Folder.svg";
import EmptyFolder from "../../../assets/svgs/EmptyFolder.svg";
import CustomInput from "../../components/ui/CustomInput";


export default function Home() {
    const navigation = useNavigation();

    return (
        <CustomView safe white>
            <CustomView padding={[0, 20]}> 
            <CustomView row center middle  space="between"  >
            <CustomView row center>
                <CustomView color={COLORS.lightprimary} round width={40} height={40}>
                    <CustomText size={14}  primary >ML</CustomText>
                </CustomView>
                    <CustomText margin={[0, 20]}>Welcome, Mike👋</CustomText>
                </CustomView>
                <CustomView padding={[5, 0, 0]}>
                    <Notifications />
                </CustomView>
            </CustomView>
            <CustomView padding={[10, 0, 0]}>
                <CustomInput
                    placeholder="What are you looking for?"
                />
            </CustomView>
            </CustomView>
            <ScrollView style={styles.container}>
                <CustomView space="between"  row padding={[10, 10]}>
                    <CustomView center>
                        <CustomView color={COLORS.deepprimary} round width={60} height={60}>
                            <Report />
                        </CustomView>
                        <CustomText size={14} descText>Upload Plans</CustomText>
                    </CustomView>
                    <CustomView center>
                        <CustomView color={COLORS.deepprimary} round width={60} height={60}>
                            <Folder />
                        </CustomView>
                        <CustomText size={14} descText>Create Project</CustomText>
                    </CustomView>
                    <CustomView center>
                        <CustomView color={COLORS.deepprimary} round width={60} height={60}>
                            <Folder />
                        </CustomView>
                        <CustomText size={14} descText>Add Report</CustomText>
                    </CustomView>
                </CustomView>
                <CustomView padding={[10,0]} bold>
                    <CustomText margin={[0, 0, 10]}>Projects</CustomText>
                    <CustomView center radius={10} padding={[45, 20, 25]} style={{borderWidth: 0.5, borderColor: COLORS.profileLine,}}>
                    <EmptyFolder />
                        <CustomText bold margin={[5, 0]}>No recent project</CustomText>
                        <CustomText descText size={15}>Projects created will appear here</CustomText>
                    </CustomView>
                </CustomView>
                <CustomView padding={[10,0]} bold>
                    <CustomText margin={[0, 0, 10]}>Recent Reports</CustomText>
                    <CustomView center radius={10} padding={[45, 20, 25]} style={{borderWidth: 0.5, borderColor: COLORS.profileLine,}}>
                    <EmptyFolder />
                        <CustomText bold margin={[5, 0]}>No recent project</CustomText>
                        <CustomText descText size={15}>Projects report created will appear here</CustomText>
                    </CustomView>
                </CustomView>
            </ScrollView>
        </CustomView>
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
