import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Platform,
  Pressable
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS, SIZES } from '../../store/constant/theme';

//constants

const CustomButton = ({
  loading,
  pressable,
  disabled,
  opacity,
  outlined,
  flex,
  height,
  margin,
  padding,
  color,
  transparent,
  primary,
  secondary,
  tertiary,
  black,
  white,
  grey,
  error,
  warning,
  success,
  info,
  shadow,
  small,
  highlight,
  nativeFeedback,
  withoutFeedback,
  style,
  children,
  block,
  onPress
}) => {
  const handleMargins = () => {
   
    if (typeof margin === 'number') {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0]
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1]
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1]
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3]
          };
      }
    }
  };

  const handlePaddings = () => {
   
    if (typeof padding === 'number') {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0]
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1]
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1]
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          };
      }
    }
  }; 

  const buttonStyles = StyleSheet.flatten([
    {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      flexDirection: 'row',
      // marginTop: SIZES.marginVertical,
      borderRadius: 10,
    },
    block && {
      // height: SIZES.medium * 3.3,
      width: '100%',
      borderRadius: SIZES.buttonRadius,
    },
    transparent && { backgroundColor: 'transparent' },
    primary && { backgroundColor: COLORS.primary },
    secondary && { backgroundColor: COLORS.secondary },
    tertiary && { backgroundColor: COLORS.tertiary },
    black && { backgroundColor: COLORS.black },
    white && { backgroundColor: COLORS.white },
    grey && { backgroundColor: COLORS.lighterGrey },
    error && { backgroundColor: COLORS.error },
    warning && { backgroundColor: COLORS.warning },
    success && { backgroundColor: COLORS.success },
    info && { backgroundColor: COLORS.info },
    color && { backgroundColor: color }, // custom backgroundColor
    flex && { flex }, // flex width
    height && { height }, // custom height
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    shadow && {
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 10
    },
    style
  ]);

  if (disabled) {
    const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
    buttonStyles.backgroundColor = backgroundColor;
    buttonStyles.opacity = 0.5;
  }

  if (outlined) {
    const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
    buttonStyles.borderWidth = 1;
    buttonStyles.borderColor = backgroundColor;
    buttonStyles.backgroundColor = 'transparent';
  }

  if (small) {
    const backgroundColor = StyleSheet.flatten(buttonStyles).backgroundColor;
    buttonStyles.borderWidth = 1;
    buttonStyles.borderColor = backgroundColor;
    buttonStyles.backgroundColor = 'transparent';
    buttonStyles.height = 32;
  
  }

  const ButtonType = highlight
    ? TouchableHighlight
    : nativeFeedback && config.isAndroid && Platform.Version >= 21
    ? TouchableNativeFeedback
    : withoutFeedback
    ? TouchableWithoutFeedback
    : pressable
    ? Pressable
    : TouchableOpacity;
  return (
    <ButtonType onPress={onPress} accessibilityRole='button' disabled={disabled} style={buttonStyles} activeOpacity={opacity}>
     {loading ? <ActivityIndicator size={14} color="white" style={{marginRight: 5}}/> : null} 
     {children}
    </ButtonType>
  );
};

export default React.memo(CustomButton);
