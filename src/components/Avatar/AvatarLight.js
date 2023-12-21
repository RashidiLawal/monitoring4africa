import React from "react";
// import Avatar from "./Avatar";
import CustomView from "../ui/CustomView";
import CustomText from "../ui/CustomText";
import WoMan from "../../../assets/svgs/Ellipse Female.svg";
import Man from "../../../assets/svgs/Ellipse Man.svg";
import { COLORS } from "../../store/constant/theme";
import { Image,StyleSheet } from 'react-native';
// import {  StyleSheet } from 'react-native';



const Avatar = ({imageUrl}) => {

   
    return (
      <CustomView style={styles.avatarContainer}>
        <CustomText>ryshefee</CustomText>
        <Image source={{uri:'https://randomuser.me/api/portraits/men/36.jpg',}} style={styles.avatarImage} />
      </CustomView>
    );
  };

const AvatarList = () => {
  const imageUrls = [
    // {
    //     url: WoMan,
    // },
    // {
    //     url: Man,
    // },
    // {
    //     url: <CustomText color={COLORS.Test}>AK</CustomText>,
    // },
    // {
    //     url: <CustomText color={COLORS.Test2}>HECTOR</CustomText>,
    // // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpassport-photo-silhouette&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNDf2u-Kj4MDFQAAAAAdAAAAABAE"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpassport-photo-icon&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNDf2u-Kj4MDFQAAAAAdAAAAABAJ"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fpassport-icon-with-female-person-profile-avatar-vector-20598862&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNDf2u-Kj4MDFQAAAAAdAAAAABAQ"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcompany-employee-id-photo-driver-licence-social-media-avatar-passport-design-element_31530188.htm&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLie29KNj4MDFQAAAAAdAAAAABAR"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcute-young-man-avatar-character-cartoon-style-vector-36211784&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAD"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Favatar%2F&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAI"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fwoman-passport-photo-to-register-marriage-illustration_7267240.html&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAQ"},
    // },
    // {
    //     avatarUrl: {uri:"https://play.google.com/store/apps/details?id=com.blackgd.passportphoto"},
    // },
    // {
    //     avatarUrl: {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fkevin_stitt.html&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAo"},
    // },
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fkevin_stitt.html&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAo",
    "https://play.google.com/store/apps/details?id=com.blackgd.passportphoto",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fwoman-passport-photo-to-register-marriage-illustration_7267240.html&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAQ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Favatar%2F&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAI",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcute-young-man-avatar-character-cartoon-style-vector-36211784&psig=AOvVaw0PlJwpKuHD_LFwrd8fgt7m&ust=1702649515398000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDv0PKNj4MDFQAAAAAdAAAAABAD",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcompany-employee-id-photo-driver-licence-social-media-avatar-passport-design-element_31530188.htm&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLie29KNj4MDFQAAAAAdAAAAABAR",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpassport-photo-silhouette&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNDf2u-Kj4MDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fpassport-photo-icon&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNDf2u-Kj4MDFQAAAAAdAAAAABAJ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fpassport-icon-with-female-person-profile-avatar-vector-20598862&psig=AOvVaw1x0-YULWyBDQFZn89xgmZY&ust=1702648667925000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNDf2u-Kj4MDFQAAAAAdAAAAABAQ"
  ];
  return (
    <CustomView style={styles.avatarListContainer}>
      <Avatar  />
      {/* {imageUrls.slice(0, 3).map((imageUrl, index) => (
        <Avatar key={index} imageUrl={imageUrl.avatarUrl} />
      ))} */}
      {imageUrls.length > 3 && (
        <CustomView style={styles.avatarContainer}>
          <CustomView style={styles.countBadge}>
            <CustomText style={styles.countText}>
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
    backgroundColor:'orange',
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    marginRight: 10,
  },
  countBadge: {
    backgroundColor: "blue",
    borderRadius: 25,
    padding: 4,
    // position: "absolute",
    bottom: 0,
    right: 0,
  },
  countText: {
    color: "white",
    fontWeight: "bold",
  },
});
