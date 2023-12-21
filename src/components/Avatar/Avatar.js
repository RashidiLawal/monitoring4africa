import React from 'react';
import { Image, StyleSheet } from 'react-native';
import CustomView from '../ui/CustomView';



const Avatar = ({imageUrl}) => {

   
    return (
      <CustomView style={styles.avatarContainer}>
        <Image source={{uri:imageUrl}} style={styles.avatarImage} />
      </CustomView>
    );
  };

export default Avatar

const styles = StyleSheet.create({
   avatarContainer: {
    //   marginRight: 10,
    },
    avatarImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
  });
  
  