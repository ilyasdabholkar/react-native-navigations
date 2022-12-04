import { StyleSheet,Button, View ,Text} from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button title="goto About" onPress={()=>{
        navigation.navigate('About');
      }} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})