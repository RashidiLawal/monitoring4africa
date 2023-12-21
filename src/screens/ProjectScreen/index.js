import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";
import { Appbar } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../../components/ui/CustomButton";
import CustomText from "../../components/ui/CustomText";
import CustomView from "../../components/ui/CustomView";
import CustomInput from "../../components/ui/CustomView";
import { COLORS } from "../../store/constant/theme";
import { resetStackAndNavigate } from "../../../utils";
import Close from "../../../assets/svgs/Close.svg";
import Plus from "../../../assets/svgs/Plus.svg";
import WhiteDots from "../../../assets/svgs/WhiteDots.svg";
import Chat from "../../../assets/svgs/Chat.svg";
import User from "../../../assets/svgs/User.svg";
import Tag from "../../../assets/svgs/Tag.svg";
import Location from "../../../assets/svgs/location.svg";
import AvatarList from "../../components/Avatar/AvatarLight";
import Folder from "../../../assets/svgs/Folder.svg";
import Camera from "../../../assets/svgs/Camera.svg";
import Selector from "../../../assets/svgs/Selected.svg";
import EmptyFolder from "../../../assets/svgs/EmptyFolder.svg";
import {Stack} from '@rneui/base'



const ProjectScreen = () => {
  // const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#083145" }}>
        <CustomView space="between" row flex padding={[0, 15, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()}>
            <Close />
          </Pressable>
          <CustomView row center columnGap={15}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <CustomView>
                <Chat />
              </CustomView>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("ProjectSucced")}>
              <CustomView>
                <WhiteDots />
              </CustomView>
            </Pressable>
          </CustomView>
        </CustomView>
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView column rowGap={13} color={COLORS.darkBlue} padding={[0,0,25,0]} borderBottomLeftRadius={25} borderBottomRightRadius={25}>
          <CustomView padding={[10, 15, 0]}>
            <CustomText size={27} heavier color={COLORS.white} spacing={3}>
              Waterview Park
            </CustomText>
          </CustomView>
          <CustomView column rowGap={13} padding={[0, 15, 0]}>
            <CustomView row center columnGap={10}>
              <User />
              <CustomText
                size={14.5}
                color={COLORS.GreyText}
                spacing={0.5}
                height={18}
              >
                Adam Levine Applesauce
              </CustomText>
            </CustomView>
            <CustomView row center columnGap={10}>
              <Location />
              <CustomText
                size={14.5}
                color={COLORS.GreyText}
                spacing={0.5}
                height={18}
              >
                15, Jupiter St . Mars, AU 234156
              </CustomText>
            </CustomView>
            <CustomView row center columnGap={15}>
              <CustomView row center columnGap={6}white round padding={[5,10]}>
                <Tag />
                <CustomText
                  size={12}
                  bold
                  color={COLORS.lightBlack}
                  spacing={0.5}
                  height={18}
                >
                  Status
                </CustomText>
              </CustomView>
              <CustomView row center >
                <AvatarList />
              </CustomView>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView space="between"  row padding={[10, 35]}>
                    <CustomView center>
                        <CustomView color={COLORS.yellow} round width={60} height={60}>
                            <Selector />
                        </CustomView>
                        <CustomText size={14} descText>Upload Plans</CustomText>
                    </CustomView>
                    <CustomView center>
                        <Pressable onPress={() => navigation.navigate('NewProject')}>
                        <CustomView color={COLORS.deepprimary} round width={60} height={60}>
                            <Camera />
                        </CustomView>
                        </Pressable>
                        <CustomText size={14} descText>Create Project</CustomText>
                    </CustomView>
                    <CustomView center>
                        <CustomView color={COLORS.avatarRad} round width={60} height={60}>
                            <Folder />
                        </CustomView>
                        <CustomText size={14} descText>Add Report</CustomText>
                    </CustomView>
                </CustomView>
                <CustomView padding={[10,15]} bold>
                    <CustomText margin={[0, 0, 10]}>Projects</CustomText>
                    <CustomView center radius={10} padding={[45, 20, 25]} style={{borderWidth: 0.5, borderColor: COLORS.profileLine,}}>
                    <EmptyFolder />
                        <CustomText bold margin={[5, 0]}>No recent project</CustomText>
                        <CustomText descText size={15}>Projects created will appear here</CustomText>
                    </CustomView>
                </CustomView>
                <CustomView padding={[10,15]} bold>
                    <CustomText margin={[0, 0, 10]}>Recent Reports</CustomText>
                    <CustomView center radius={10} padding={[45, 20, 25]} style={{borderWidth: 0.5, borderColor: COLORS.profileLine,}}>
                    <EmptyFolder />
                        <CustomText bold margin={[5, 0]}>No recent project</CustomText>
                        <CustomText descText size={15}>Projects report created will appear here</CustomText>
                    </CustomView>
                </CustomView>
      </ScrollView>
    </>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "column",
    //   height: "100%",
    //   paddingHorizontal: 15,
    //   paddingTop: 5,
    paddingBottom: 100,
  },
  bottoms:{
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5
  }
});


