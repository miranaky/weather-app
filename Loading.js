import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native';


export default function Loading(){
    return <View style={style.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Text style={style.text}>Now Loading the Weather</Text>
    </View>
}

const style = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"flex-end",
      backgroundColor:"#FDF6AA",
      paddingHorizontal:60, 
      paddingVertical:120
    },
    text: {
      color:"#2c2c2c",
      fontSize:37

    }
})