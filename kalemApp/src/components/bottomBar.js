import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { NavigationContainer } from '@react-navigation/native'; // navigation importları
//import { createStackNavigator } from '@react-navigation/stack'; // navigation importları



class BottomBar extends Component {
    render() {
        return (
            <View style={styles.bottomStyle}>
                <Text>Bir hesabınız yoksa  </Text>
                <Text onPress={Actions.register}
                 style={{fontWeight:'bold'}} 
                                > Kaydol </Text>
            </View>
        )
    };

}

const styles = StyleSheet.create({
    bottomStyle: {
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center"
    }

})

export default BottomBar;