import React from "react";
// import Avatar from "./Avatar";
import CustomView from "../ui/CustomView";
import CustomText from "../ui/CustomText";
import WoMan from "../../../assets/svgs/Ellipse Female.svg";
import Man from "../../../assets/svgs/Ellipse Man.svg";
import { COLORS } from "../../store/constant/theme";
import { Image,StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';





const AvatarList = () => {
  const imageUrls = [
   
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
    { avatarUrl:{uri:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},},
  ];
  return (
    <CustomView style={styles.avatarListContainer}>
      {/* <Avatar  /> */}
      {imageUrls.slice(0, 3).map((imageUrl, index) => (
        <Avatar source={imageUrl.avatarUrl} rounded/>
      ))}
      {imageUrls.length > 3 && (
        <CustomView style={styles.avatarContainer}>
          <CustomView style={styles.countBadge}>
            <CustomText style={styles.countText} >
              + {imageUrls.length - 3}
            </CustomText>
          </CustomView>
        </CustomView>
      )}
    </CustomView>
  );
};

export default AvatarList;

const styles = StyleSheet.create({
  avatarListContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    marginRight: 10,
  },
  countBadge: {
    backgroundColor: "#fff",
   
    borderRadius: 25,
    padding: 4,
    // position: "absolute",
    bottom: 0,
    right: 0,
  },
  countText: {
    color: "#000",
    fontWeight: "bold",
  },
});
