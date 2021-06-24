import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Header from './src/components/header';
import Converter from './src/components/converter';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

 


  render() {
    return (
      <View style={styles.container}>

        {/*  dışarıdan parametre olarak girildi  */}
        <Header osman='Currency Converter' />
          <Converter />
      </View>
    );
  }
}
const styles = StyleSheet.create({ 
  container: {
    flex:1,
    backgroundColor:'#F3F3F3'
  },
  
})



