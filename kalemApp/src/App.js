import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './router';

// applyMiddleware buton üzerinden redux ile işlem yapabilmek için ekledim (thunk ile)

export default class App extends Component {
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyClvYFDLSeLQyJxhgLs8Pd7SNZXYMg2mMI",
            authDomain: "authreactnative-64d7b.firebaseapp.com",
            projectId: "authreactnative-64d7b",
            storageBucket: "authreactnative-64d7b.appspot.com",
            messagingSenderId: "875561377266",
            appId: "1:875561377266:web:4ff0cc8040f65b46901f6b"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                   <Router></Router>   
            </Provider>
        );
    }

}