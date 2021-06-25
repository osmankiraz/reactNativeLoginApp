import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const PickerMarital = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
            
            
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Married" value="married" />
                <Picker.Item label="Single" value="single" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center"
    },
    textStyle: {
        paddingLeft: 20,
        fontSize: 17
    }

});

export default PickerMarital;