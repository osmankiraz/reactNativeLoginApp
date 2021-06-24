import React,{Component} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import Banner from './components/banner';
import LoginForm from './components/loginForm';
import firebase from 'firebase' ;
import {Spinner,MyButton} from './components/common';

 class App extends Component {

    state ={
        loggedIn : null
    }

    componentDidMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyClvYFDLSeLQyJxhgLs8Pd7SNZXYMg2mMI",
            authDomain: "authreactnative-64d7b.firebaseapp.com",
            projectId: "authreactnative-64d7b",
            storageBucket: "authreactnative-64d7b.appspot.com",
            messagingSenderId: "875561377266",
            appId: "1:875561377266:web:7b228579fe55604e901f6b"
        });


        firebase.auth().onAuthStateChanged((user) => {
            const loggedIn = user ? true:false;
            this.setState({
                loggedIn:loggedIn
            })
        })


    }


    renderContent (){
        const {loggedIn} =this.state;

        switch(loggedIn) {

            case true: 
                return (
                    <Button title='Logout'
                    onPress={
                        ()=> firebase.auth().signOut()
                    }></Button>
                )
            case false :
                return (
                    <LoginForm />
                )
            default:
                return (<Spinner/>)
        }



    }


    render(){
        return(
            <View style={styles.appContainer}>
                <Banner bannerText="Login App" />
                    {this.renderContent()}
            </View>

        )



    }
}

const styles=StyleSheet.create({
    appContainer:{
        backgroundColor:'#F3F3F3',
        flex:1
    }
});
export default App;
