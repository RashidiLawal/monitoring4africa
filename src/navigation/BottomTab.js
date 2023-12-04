import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import {MaterialIcons, Fontisto, FontAwesome as FontAwesome} from "@expo/vector-icons" 
import Home from '../screen/home';
import { COLORS } from '../store/constant/theme';
import Profile from '../screen/profile';
import Notification from '../screen/notification';


const BottomTab = ({ navigation }) => {
  const theme = useTheme()
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', },
    { key: 'notification', title: 'Notification', },
    { key: 'profile', title: 'Profile', },
  ]);

  const renderIcon = ({ route, focused, color }) => {
    var icon
    switch (route.key) {
      case 'home':
        icon = focused ? <Fontisto name="home" size={25} color={COLORS.primary}/> : <Fontisto name="home" size={25} color={theme.colors.text}/>
        break;
      case 'notification':
        icon = focused ? <Fontisto name="bell" size={25} color={COLORS.primary}/>: <Fontisto name="bell" size={25} color={theme.colors.text} />
        break;
      case 'profile':
        icon = focused ? <FontAwesome name="user-o" color={COLORS.primary} size={25} />: <FontAwesome name="user-o" size={25} color={theme.colors.text}/>
        break;
      default:
      case 'home':
        icon = focused ? <Fontisto name="home" size={25} color={COLORS.primary}/> : <Fontisto name="home" size={25} color={theme.colors.text}/>
        break;
    }
    return icon
  }
  // useEffect
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    notification: Notification,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      theme={{ colors: { primary: 'transparent', } }}
      inactiveColor={theme.colors.text}
      activeColor={COLORS.primary}
      labeled={false}
      renderIcon={renderIcon}
    />
  );
};

export default BottomTab;