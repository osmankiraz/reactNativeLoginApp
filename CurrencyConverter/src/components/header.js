import React, { Component } from 'react';
import { StyleSheet, Text,View } from 'react-native';





export default class Header extends Component {
    render() {
        // conts { header,headerText } = styles;
        //conts header =styles.header
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}> {this.props.osman} </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#788B91'
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center'
    }
});



