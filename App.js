import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DrawerContent from './src/container/screens/DrawerContent';
import ArticleScreen from './src/container/screens/ArticleScreen';
import ServiceScreen from './src/container/screens/ServiceScreen';
import HomeScreen from './src/container/screens/HomeScreen';
import ChannelScreen from './src/container/screens/ChannelScreen';
import FundRaisingScreen from './src/container/screens/FundRaisingScreen';
import FavouriteScreen from './src/container/screens/FavouriteScreen';
import SettingScreen from './src/container/screens/SettingScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Service" component={ServiceScreen} />
        <Drawer.Screen name="Channels" component={ChannelScreen} />
        <Drawer.Screen name="Articles" component={ArticleScreen} />
        <Drawer.Screen name="Fundraising" component={FundRaisingScreen} />
        <Drawer.Screen name="Favourite" component={FavouriteScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
