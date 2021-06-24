import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const Input = ({ text, inputPlaceHolder, onChangeText, value, secureTextEntry }) => {
    const { inputWrapper, textStyle, inputStyle } = styles;
    return (
        <View style={inputWrapper}>
            <Text style={textStyle}>{text}</Text>
            <TextInput style={inputStyle}
                secureTextEntry={secureTextEntry}
                placeHolder={inputPlaceHolder}
                onChangeText={onChangeText}
                value={value}
                 />

        </View>

    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        height: 50,
        width: 'auto',
        borderColor: '#E5E5E8',
        borderBottomWidth: 2,
        alignItems:'center'
        
    },
    textStyle: {
        paddingLeft:15,
        fontSize:17,
        flexGrow:1
    },
    inputStyle: {
        fontSize: 17,
        flexGrow:2
    }
});

export { Input };