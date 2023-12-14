import { Dimensions, Platform } from 'react-native';


const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const COLORS = {
  //base color
  lightprimary: 'rgba(81, 153, 230,0.1)',
  lightsecondary: 'rgba(245, 45, 69, 0.5)',
  deepprimary: 'rgba(7, 14, 17, 1)',
  // deeptextprimary: '#00ACCD',
  secondary: '#007C93',
  accent: 'rgba(15, 27, 36, 1)',
  tertiary: '#FF7C00',
  success: '#219653',
  error: '#fe3b30',
  background: '#F2F5F7',
  profileLine: '#D7E2E4',
  transparent: '#67dbef',
  descText: 'rgba(83, 102, 110, 1)',
  green: '#4ED765',
  placeholder: '#cfd8dc', 
  black: '#000000',
  white: '#ffffff',
  Test:'#6AE29B',
  Test2:'#8CD2F2',
 
  
  
  communityGrey: '#F4F6F7',
  SettingTabGrey: '#F8F8F8',
  darkBlue:'#083145',
  inputBackground: '#F5F8FA',
  GreyText: '#E5E9EB',
  midGrey: '#53666E', 
  greyText: '#8A9BA3',
  lightgrey:'#858B97',
  orange:'#EA5540',
  lightBlack:'#232323',
  primary: '#31AEE8',
};

export const SIZES = {
  //font sizes
  base: 8,
  xsmall: 12,
  smallish: 13,
  small: 14,
  medium: 16,
  large: 17,
  xlarge: 20,
  xxlarge: 24,
  xxxlarge: 26,

  //margin
  marginHorizontal: 10,
  marginVertical: 10,

  //padding
  padding: 24,

  //radius
  buttonRadius: 10,
  cardRadius: 5,
  radius: 4,

  //dimensions
  screenWidth,
  screenHeight,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54
};

export const FONTS = {
  xsmall: { fontSize: SIZES.xsmall, letterSpacing: 0.15 },
  smallish: { fontSize: SIZES.smallish, letterSpacing: 0 },
  small: { fontSize: SIZES.smallish, letterSpacing: 0 },
  medium: { fontSize: SIZES.medium, letterSpacing: 0 },
  large: { fontSize: SIZES.large, letterSpacing: 0 },
  xlarge: { fontSize: SIZES.xlarge, letterSpacing: 0 },
  xxlarge: { fontSize: SIZES.xxlarge, letterSpacing: 0 },
  xxxlarge: { fontSize: SIZES.xxxlarge, letterSpacing: 0 }
};

export default { COLORS, SIZES, FONTS };
