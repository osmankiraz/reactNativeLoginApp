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
        shadowColor: '#000000',
        elevation: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center'
    }
})



