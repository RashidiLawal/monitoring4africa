import React, { Component, useEffect } from 'react';
//import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, View, Row, Col } from 'native-base';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ScrollView, View } from 'react-native';
import CustomView from './CustomView';
import { COLORS, SIZES } from '../../store/constant/theme';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import { useState } from 'react';
import Check from "../../../assets/svgs/Check.svg"
import Uncheck from "../../../assets/svgs/Uncheck.svg"
import { TextInput as PaperInput, ActivityIndicator } from 'react-native-paper';
import SimplelineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Modal from "react-native-modal";
import countries from '../../../utils/countryList';
import CustomInput from './CustomInput';


export default function CountryModal({ modalVisible, setModalVisible, submit, selected }) {

    const [selectedList, setSelectedList] = useState(null)
    const [suggestions, setSuggestions] = useState([])
    // const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        setSuggestions(countries.slice(0, 4))
    }, [])


    const unselect = () => {
        setSelectedList(null)
    }
    const select = (list) => {
        setSelectedList(list)
    }
    const search = (text) => {
        var result = []
        countries.map((list)=> {
            if(list.name.toLowerCase().indexOf(text) >= 0){
                result.push(list)
            }
        })
        setSuggestions(result)
    }
    // const check = (list) => {
    //     var arr = countries.filter((item)=> item.name == list.name);

    // return arr.length ? true : false
    // }
    return (
        <View>
            <Modal
                animationType="fade"
                visible={modalVisible ? true : false}
                onBackdropPress={() => {
                    setModalVisible(false)
                }}
                transparent={true}

                animationInTiming={2000}
                backdropOpacity={0.5}
                coverScreen={false}
                style={styles.modal}
            >

                <View style={{ ...styles.scrollableModal, backgroundColor: 'white', }}>

                    <CustomView padding={[40, 20]} flex={false}>
                        <CustomView padding={[0, 10]}>
                            <CustomView  >
                                <CustomText size={25} bold>Select your country </CustomText>
                            </CustomView>
                            <CustomView margin={[10, 0, 0]} style={{ borderBottomWidth: .5, borderBottomColor: COLORS.profileLine }}>
                                <CustomInput
                                    label={'Search'}
                                    onChangeText={search}
                                    placeholder="Enter your country code"
                                />
                                <CustomText margin={[10, 0]}>
                                    Suggesstions
                                </CustomText>
                            </CustomView>
                            <ScrollView contentContainerStyle={{ height: 280, paddingBottom: 20, }}>

                                <CustomView padding={[15, 0, 0]} >
                                    {suggestions.map((list, key) => (
                                        <TouchableOpacity key={key} onPress={() => list?.name == selectedList?.name ? unselect() : select(list)}>
                                            <CustomView key={key} flexDirection="row" space="between" padding={[15, 0]} >
                                                <CustomView center row space="between" >
                                                    <CustomText accent>{list.name} ({list.dial_code}) </CustomText>
                                                    {list?.name == selectedList?.name ? <Check /> : <Uncheck />}
                                                </CustomView>
                                            </CustomView>
                                        </TouchableOpacity>
                                    ))}
                                </CustomView>
                            </ScrollView>
                            <CustomView flex={0} padding={[0]}>
                                <CustomButton
                                    onPress={() => {
                                        submit(selectedList) 
                                        setModalVisible(false)
                                    }}
                                    disabled={!selectedList}
                                >

                                    <CustomText heavy white >
                                        Save and continue
                                    </CustomText>


                                </CustomButton>
                            </CustomView>
                        </CustomView>
                    </CustomView>
                </View>

            </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    scrollableModal: {
        height: SIZES.screenHeight * 0.7,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },

});
