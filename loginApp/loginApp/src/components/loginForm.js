import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import {Input,Spinner,MyButton} from './common';
import firebase from 'firebase';



class LoginForm extends Component {
    state ={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onButtonClicked(){
        const {email, password} = this.state;
        this.setState({
            error:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{    
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
        })
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFailed(){
        this.setState({
            error:'Authentication failed',
            loading :false
        })
    }
    

    render(){
        const {error,loading} =this.state;
        const errorMsg=error ? (
            <Text style={styles.errorStyle}>
                {error}
            </Text>
        ) : null;


        const loginButton =loading ? (
            <Spinner />
        ) : (
                <Button onPress={this.onButtonClicked.bind(this)} title='Login' ></Button>
        );

        return (
            <View style ={{padding : 30}}>
                <View>
                    <Input text='E-mail' inputPlaceHolder='Enter E-Mail' 
                                onChangeText={(text)=>{
                                        this.setState({
                                            email:text
                                        })
                                }}
                                value={this.state.email}
                    
                    />
                </View>
                <View>
                    <Input text='Password' inputPlaceHolder='Enter Password'
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                            
                        }}
                        secureTextEntry
                        value={this.state.password}

                    />
                </View>
                {errorMsg}
                <View style={styles.buttonWrapper}>
                    {loginButton}
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
errorStyle:{
    fontSize:20,
    color:'red',
    paddingTop:5,
    fontWeight:'bold',
    alignSelf:'center'
}


})
export default LoginForm;
