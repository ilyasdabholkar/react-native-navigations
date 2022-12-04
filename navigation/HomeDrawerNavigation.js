import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={HomeStackNavigator} options={{title:'Home'}}/>
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
}

export default HomeDrawerNavigation