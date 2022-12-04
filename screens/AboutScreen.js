import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const AboutScreen = ({route,navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is About Screen</Text>
      <Button title="goto Home" onPress={()=>{
        navigation.navigate('Home');
      }} />
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    alignContent : 'center'
  }
})