import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './navigation/HomeStackNavigator';
import HomeDrawerNavigation from './navigation/HomeDrawerNavigation';
import MainTabNavigator from './navigation/MainTabNavigator';

export default function App() {

  let user = false;
  let main;
  if(user){
    main = <MainTabNavigator/>;
  }else{
    main = <HomeStackNavigator/>
  }
  return (
    <NavigationContainer>
      {main}
    </NavigationContainer>
  );
}
