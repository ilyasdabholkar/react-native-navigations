
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="About" component={AboutScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator