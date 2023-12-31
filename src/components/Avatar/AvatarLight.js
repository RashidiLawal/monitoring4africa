import React from "react";
// import Avatar from "./Avatar";
import CustomView from "../ui/CustomView";
import CustomText from "../ui/CustomText";
import WoMan from "../../../assets/svgs/Ellipse Female.svg";
import Man from "../../../assets/svgs/Ellipse Man.svg";
import { COLORS } from "../../store/constant/theme";
import { Image,StyleSheet } from 'react-native';
// import { Avatar } from '@rneui/themed';





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
    <CustomView style={styles.avatarListContainer} row center columnGap={-15}>
      <CustomView row columnGap={-15}>
      {/* {imageUrls.slice(0, 4).map((imageUrl, index) => (
        
        <Avatar source={imageUrl.avatarUrl} rounded/>
      
    ))} */}
      </CustomView>
      {imageUrls.length > 3 && (
        <CustomView style={styles.avatarContainer} center>
          <CustomView radius={25} background={COLORS.white} padding={[0, 5]}>
            <CustomText style={styles.countText} size={15} >
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
  // avatarListContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  avatarContainer: {
    marginRight: 10,
  },
  countText: {
    color: "#000",
    fontWeight: "bold",
    
  },
});
