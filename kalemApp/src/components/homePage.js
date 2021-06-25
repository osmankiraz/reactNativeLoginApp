import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomePage extends Component {
    render() {
        return (
            <View style={styles.pageStyle}>
                <Text>  HOME PAGE   </Text>
                
            </View>
        )
    };

}

const styles = StyleSheet.create({
    pageStyle: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    }

})

export default HomePage;