import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ContactScreen from '../screens/ContactScreen';
import HomeDrawerNavigation from './HomeDrawerNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeDrawerNavigation} options={{headerShown:false}} />
          <Tab.Screen name="Contacts" component={ContactScreen} />
        </Tab.Navigator>
      );
}

export default MainTabNavigator