import React from 'react'
import CustomButton from '../../components/ui/CustomButton'
import CustomText from '../../components/ui/CustomButton'
import CustomInput from '../../components/ui/CustomButton'
import CustomView from '../../components/ui/CustomButton'
import {View, StyleSheet, TouchableOpacity, Pressable, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BackIcon from '../../../assets/svgs/ArrowLeft.svg'
import Cancel from '../../../assets/svgs/X.svg'
import GreenCheck from '../../../assets/svgs/CheckG.svg'
import { Appbar } from 'react-native-paper'

const GetStarted = () => {
    const navigation = useNavigation()
  return (
    <>
    <Appbar.Header style={{ backgroundColor: "#fff" }}>
      <CustomView padding={[0, 0, 0, 5]}>
          <Pressable onPress={() => navigation.goBack()} shadow>
            <BackIcon />
          </Pressable>
        </CustomView>
      </Appbar.Header>
    <ScrollView style={styles.container}>
    <CustomView>
          <CustomView>
            <CustomText>Get Started</CustomText>
            <CustomText>Create a strong password for security. Make it both secure and easy to remember</CustomText>
          </CustomView>
          <CustomView>
            <CustomInput />
            <CustomInput />
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomView>
            <CustomView>
              <GreenCheck />
              <CustomText>Has at least 8 characters</CustomText>
            </CustomView>
            <CustomView>
              <GreenCheck />
              <CustomText>Has an uppercase letter</CustomText>
            </CustomView>
          </CustomView>
          <CustomView>
            <CustomView>
              <Cancel />
              <CustomText>Has a number</CustomText>
            </CustomView>
            <CustomView>
              <Cancel />
              <CustomText>Has a symbol</CustomText>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomInput />
        </CustomView>
    </ScrollView>
    <CustomView padding={[20, 20, 35]} white>
    <CustomButton onPress={() => navigation.navigate("VerifyEmail")}>
          <CustomText white bold size={18}>
            {/* Proceed */}
          </CustomText>
      </CustomButton>
    </CustomView>
    </>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    body: {
      justifyContent: "space-between",
      height: "100%",
  
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 95,
    },
    container: {
      backgroundColor: "#FFF",
      flexDirection: "column",
      height: "100%",
      paddingHorizontal: 15,
      paddingTop: 5,
  
      // paddingBottom: 95,
    },
})


{/* <Appbar.Header style={{ backgroundColor: "#fff" }}>
        
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <CustomView>
          <CustomView>
            <CustomText>Get Started</CustomText>
            <CustomText>Create a strong password for security. Make it both secure and easy to remember</CustomText>
          </CustomView>
          <CustomView>
            <CustomInput />
            <CustomInput />
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomView>
            <CustomView>
              <GreenCheck />
              <CustomText>Has at least 8 characters</CustomText>
            </CustomView>
            <CustomView>
              <GreenCheck />
              <CustomText>Has an uppercase letter</CustomText>
            </CustomView>
          </CustomView>
          <CustomView>
            <CustomView>
              <Cancel />
              <CustomText>Has a number</CustomText>
            </CustomView>
            <CustomView>
              <Cancel />
              <CustomText>Has a symbol</CustomText>
            </CustomView>
          </CustomView>
        </CustomView>
        <CustomView>
          <CustomInput />
        </CustomView>
      </ScrollView>
      <CustomView padding={[20, 20, 35]} white>
        <CustomButton onPress={() => navigation.navigate("VerifyEmail")}>
          <CustomText white bold size={18}>
            Proceed
          </CustomText>
        </CustomButton>
      </CustomView> */}