import React, { useState } from "react";
import { View, StyleSheet, Image, Animated, ScrollView, StatusBar, ImageBackground, Pressable } from "react-native"
import CustomButton from "../../components/ui/CustomButton";
import CustomView from "../../components/ui/CustomView";
import CustomText from "../../components/ui/CustomText";
import { slideImages } from "../../store/constant/images";
import { COLORS, SIZES } from "../../store/constant/theme";
import { LinearGradient } from 'expo-linear-gradient';

function Onboarding({ navigation }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const scrollX = new Animated.Value(0);
    const [isLoaded, setIsLoaded] = useState(false);


    const slides = [
        {
            title: 'Empower your Team',
            description: 'Get every member of your team in the know of things that matter.',
            //   img: () => slideImages.stepOne
        },
        {
            title: 'Boost Productivity',
            description: 'Save several field and accounting hours with our simplified daily reports to time sheet generation',
            //   img: ()=>slideImages.stepTwo
        },
        {
            title: 'Preserve your Project Data',
            description: 'Archive all construction data for a lifetime of insights and analysis.',
            //   img: ()=>slideImages.stepThree
        }
    ];
    // useEffect(() => {
    //     scrollX.addListener(({ value }) => {
    //       setSlideIndex(Math.floor(value / SIZES.screenWidth));
    //     });
    //   }, [slideIndex]);



    const renderImages = scrollX => {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={0}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{backgroundColor: 'blue', }}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
            >

                {slideImages.map((item, index) => (
                    <View key={`img-${index}`} style={{ width: SIZES.screenWidth ,  height: SIZES.screenHeight * .91, flex: 1, }}>

                        <ImageBackground
                            source={item}
                            resizeMode="cover"
                            style={{
                                width: SIZES.screenWidth,
                                // flex: 1, justifyContent: 'center',
                                height: '100%', 
                                flex: 1,
                            }}
                        >
                            <LinearGradient
                                style={{ position: 'absolute', flex: 1, width: 100 + '%', height: 100 + '%' }}
                                colors={["rgba(15, 29, 36, .1)", "rgba(7, 14, 17,  .1)", "rgba(7, 14, 17, .1)", "rgba(7, 14, 17,  .5)", "rgba(7, 14, 17, .8)", "rgba(7, 14, 17, 1)"]}
                            >
                            </LinearGradient>
                        </ImageBackground>
                        {renderTexts(index)}

                    </View>
                ))}

            </ScrollView>
        );
    };

    const renderDots = scrollX => {
        var dotPosition = Animated.divide(scrollX, SIZES.screenWidth);
        return (
            <CustomView row center middle margin={[SIZES.medium, 0]}  >
                {slides.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1, index + 1],
                        outputRange: [0.3, 1, 0.3, 0.3],
                        extrapolate: 'clamp'
                    });

                    // const color = opacity.__getValue() === 1 ? COLORS.primary : '#C8D5D8';
                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            style={[styles.dot, { opacity }]}
                        >
                        </Animated.View>
                    );
                })}
            </CustomView>
        );
    };
    const renderTexts = slideIndex => {
        const slide = slides[slideIndex];

        return (
            <CustomView padding={[0, 15, 20]}   >
                <CustomText heavy animated center  height={22} size={24} color={COLORS.primary}>
          {slide && slide.title}
        </CustomText>
                <CustomText
                    lightbold
                    animated
                    white
                    center
                    margin={[10, 25, 20]}
                    // size={15}
                    height={20}
                    localeKey={`welcomeDescription${slideIndex + 1}`}
                >
                    {slide && slide.description}
                </CustomText>
               {slideIndex == 2 ? 
               <> 
               <CustomButton  primary onPress={() => navigation.navigate('Signup')}>
                        <CustomText white lightbold large heavy>
                            Get Started
                        </CustomText>
                    </CustomButton> 
                    <CustomView center row  middle  margin={[10,5, 0]}>
                    <CustomText white>Already have an account?</CustomText>
                    <Pressable onPress={()=>navigation.navigate('Login')}>
                        <CustomText color="red"> Log in</CustomText>
                    </Pressable>
                    </CustomView>
                    </>: null}
                    
            </CustomView>
        );
    };
    return (
        <CustomView  color={COLORS.deepprimary} flex={1} >

            <StatusBar barStyle={'dark-content'} translucent={false} />
            <CustomView center middle  >
                {renderImages(scrollX)}
            </CustomView>
            <CustomView   center  >
                {renderDots(scrollX)}
                {/* <CustomButton block primary onPress={() => navigation.navigate('Home')}>
                        <CustomText white lightbold large >
                            Explore
                        </CustomText>
                    </CustomButton> */}
                {/* <CustomButton block outlined onPress={() => navigation.navigate('Signin')}>
                        <CustomText primary lightbold large localeKey="Login">
                            Join Terrachow
          </CustomText>
                    </CustomButton>  */}
            </CustomView>
        </CustomView>
    );
}

const styles = StyleSheet.create({
    bg: {
    },
    onboardingImg: {
        width: 100 + '%',
        height: 400
    },
    dot: {
        width: 9, height: 9,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: SIZES.small / 2,
        marginRight: SIZES.small / 2,
        borderRadius: SIZES.small,
        backgroundColor: 'white',
        flex: 0
    }

})
export default Onboarding;
