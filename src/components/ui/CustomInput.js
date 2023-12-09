import React from 'react';
import { TextInput, StyleSheet, Image, TouchableOpacity, View } from 'react-native';

//components
import CustomView from './CustomView';
import CustomText from './CustomText';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, SIZES } from '../../store/constant/theme';

const CustomInput = ({  label,
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
  multiline = false,
  textcolor,
  keyboardType='default',
  inputRef}) => 
   {
  return (
    <CustomView flex={false} style={{width: '100%'}}>
        {
          label ? <CustomText size={14} margin={[0, 0, 5]}>
            {label}
          </CustomText> : null
        }
        <TextInput
          style={{ ...styles.defaultStyle, ...style, ...textcolor, }}
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
          keyboardType={keyboardType}
          returnKeyLabel="done"
          ref={inputRef}
          // {...props}
        />
     
    </CustomView>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: COLORS.inputBackground,
    // borderColor: "#31AEE8",
    // borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
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
