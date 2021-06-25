import React, { Component } from 'react';
import { View, Text, StyleSheet,Picker } from 'react-native';
import {Input} from './common';
import PickerMarital from './common/picker';

class Register extends Component {
    
state ={
    email:'',
    password:'',
    nameSurname:'',
    age:''
}

    render() {
        return (
            <View style={styles.registerStyle}>
                <Input text='Email' inputPlaceHolder='Enter Email'
                    onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}
                    value={this.state.email} />
                <Input text='Password' inputPlaceHolder='Enter Password'
                        onChangeText={(text)=> {this.setState({password:text})}}
                        secureTextEntry
                        value={this.state.password}
                />    
                <Input text='Name Surname' inputPlaceHolder='Enter Name'
                    onChangeText={(text) => { this.setState({ nameSurname: text }) }}
                        value={this.state.nameSurname} />
                <Input text='Age' inputPlaceHolder='Enter Age' 
                    onChangeText={(text) => { this.setState({ age: text }) }}
                    value={this.state.age} />
             
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={{fontSize:17,marginRight:50}}>Marital Status</Text>
                    <PickerMarital/>
                </View>
                        





            </View>
            
        )
    };

}

const styles = StyleSheet.create({
    registerStyle: {
        flex:1,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: "center"
    }

})

export default Register;