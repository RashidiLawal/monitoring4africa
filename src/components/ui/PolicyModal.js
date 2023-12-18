import React from 'react';
//import { Container, Header, Title, Button, Left, Right, Body, Icon, Content, Text, View, Row, Col } from 'native-base';
import { StyleSheet,  ScrollView, View } from 'react-native';
import CustomView from './CustomView';
import { COLORS, SIZES } from '../../store/constant/theme';
import CustomText from './CustomText';
import Modal from "react-native-modal";


export default function PolicyModal({ modalVisible, setModalVisible,   }) {
 
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
                                <CustomText size={25} padding={[0, 0, 15]} heavy>Privacy Policy</CustomText>
                            </CustomView>
                            <ScrollView contentContainerStyle={{ paddingBottom: 100, }}>

                                <CustomView  >
                                    <CustomText size={17} weight={600}>Introducing our Terms and Conditions(the“Agreement”) including who it applies to.</CustomText>

                                    <CustomText accent margin={[15, 0]}>When you open an account with us, you are setting up an agreement. This is between xyz Limited (or any other company we transfer it to) and you.
                                       </CustomText>
                <CustomText  accent margin={[0, 0, 15]}> The Agreement applies to and regulates the provision of the xyz services provided by xyz Limited (hereinafter called“xyz”), a non-banking financial institution licensed by [*Input License issuing corporation here*] (“[*input Acronym here*]”)xyz is a B2C mobile app that focuses on helping xyz, allowing them to xyz – xyz.</CustomText>
                                    <CustomText>By clicking to accept this Agreement, you agree to be bound by this Agreement, consent to electronic communications as further detailed in Page [*input page number* *here*], and agree to Flickwheel’s Privacy Policy. </CustomText>
                                </CustomView>
                            </ScrollView>
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
});
