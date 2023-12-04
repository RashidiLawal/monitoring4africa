import React from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

//components
import CustomView from './CustomView';
import CustomText from './CustomText';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, SIZES } from '../store/constant/theme';

const CustomInput = props => {
  const {
    label,
    placeholder,
    iconName,
    secureTextEntry,
    onIconClick,
    value,
    onChangeText,
    onFocus,
    style,
    iconType: IconType = Icon,
    labelInfo,
    onLabelInfoClick,
    multiline = true,
    textcolor,
    inputRef
  } = props;

  return (
    <CustomView flex={false}>
      {/* {label ? (
        <CustomView flex={false} row>
          <CustomText size={17} medium300 style={styles.label} lightGrey margin={[10, 0]}>
            {label}
          </CustomText>
          {labelInfo && (
            <TouchableOpacity
              style={styles.image}
              onPress={() => {
                onLabelInfoClick();
              }}
            >
              <Image source={icons.info} />
            </TouchableOpacity>
          )}
        </CustomView>
      ) : null} */}
      {iconName ? (
        <CustomView
          flex={false}
          row
          style={{
            width: '100%',
            borderRadius: SIZES.radius,
            // backgroundColor: COLORS.inputGrey,
            // ...style
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={{ ...styles.phoneNext, ...style, }}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onChangeText={text => onChangeText(text)}
              value={value}
              autoCorrect={false}
              selectTextOnFocus={true}
              // textContentType="creditCardNumber"
              autoCompleteType="off"
              autoCapitalize="sentences"
              multiline={multiline}
              onFocus={onFocus}
              ref={inputRef}
              {...props}
            />
          </View>

          <CustomView flex={false} center middle row style={{ width: 50 }}>
            <IconType
              name={iconName}
              size={20}
              onPress={() => onIconClick()}
              color={COLORS.lightGrey}
            />
          </CustomView>
        </CustomView>
      ) : (
        <TextInput
          style={{ ...styles.phoneNext, ...style, ...textcolor, }}
          placeholder={placeholder}
          onChangeText={text => onChangeText(text)}
          value={value}
          selectTextOnFocus={true}
          autoCompleteType="off"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={COLORS.greyText}
          multiline={multiline}
          onFocus={onFocus}
          ref={inputRef}
          // {...props}
        />
      )}
    </CustomView>
  );
};

const styles = StyleSheet.create({
  phoneNext: {
    minHeight: 50,
    borderRadius: SIZES.radius,
    width: '100%',
    // backgroundColor: COLORS.formBackground,
    borderColor: COLORS.formBorder,
    borderWidth: 0.7,
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    color: COLORS.descText,
    // fontFamily: 'avenir-regular'
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.lightGrey
  },
  image: {
    justifyContent: 'center',
    marginLeft: 10
  }
});

export default CustomInput;
