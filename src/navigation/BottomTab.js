import * as React from 'react';
import { BottomNavigation, } from 'react-native-paper';
import Home from '../screens/home';
import { COLORS } from '../store/constant/theme';
import HomeIcon from "../../assets/svgs/HomeIcon.svg"
import SearchIcon from "../../assets/svgs/SearchIcon.svg"
import ChatIcon from "../../assets/svgs/ChatIcon.svg"
import MoreIcon from "../../assets/svgs/MoreIcon.svg"
import CustomView from '../components/ui/CustomView';

export const TestScreen1 = () => <CustomView></CustomView>
export const TestScreen2 = () => <CustomView></CustomView>
export const TestScreen3 = () => <CustomView></CustomView>

const BottomTab = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', },
    { key: 'search', title: 'TestScreen1', },
    { key: 'chats', title: 'TestScreen2', },
    { key: 'more', title: 'TestScreen3', },
  ]);

  const renderIcon = ({ route, focused, color }) => {
    var icon
    switch (route.key) {
      case 'home':
        icon = focused ? <HomeIcon /> : <HomeIcon />
        break;
      case 'search':
        icon = focused ? <SearchIcon /> : <SearchIcon />
        break;
      case 'chats':
        icon = focused ? <ChatIcon /> : <ChatIcon />
        break;
      case 'more':
        icon = focused ? <MoreIcon /> : <MoreIcon />
        break;
      default:
        icon = focused ? <HomeIcon /> : <HomeIcon />
    }
    return icon
  }
  // useEffect
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    search: TestScreen1,
    chats: TestScreen2,
    more: TestScreen3,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // theme={{ colors: { primary: 'red', } }}
      // inactiveColor={theme.colors.text}
      barStyle={{backgroundColor: 'white'}}
      // activeColor={'red'}
      labeled={false}
      renderIcon={renderIcon}
    />
  );
};

export default BottomTab;