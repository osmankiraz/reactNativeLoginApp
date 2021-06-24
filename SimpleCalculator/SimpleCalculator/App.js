import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Header from './src/components/header'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result: '',
    }

    this.sum = this.sum.bind(this);
    this.deduct = this.deduct.bind(this);
    this.mult = this.mult.bind(this);
    this.div = this.div.bind(this);
  }

  sum() { // toplama işlemi 
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const result = number1 + number2;

    this.setState({
      result: result
    })

  }
  deduct() { // çıkarma işlemi
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const result = number1 - number2;

    this.setState({
      result: result
    })

  }
  mult() { // çarpma işlemi
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const result = number1 * number2;

    this.setState({
      result: result
    })

  }
  div() {   // bölme işlemi
    const number1 = parseInt(this.state.input1);
    const number2 = parseInt(this.state.input2);

    const result = number1 / number2;

    this.setState({
      result: result
    })

  }


  render() {
    return (
      <View style={styles.container}>

        {/*  dışarıdan parametre olarak girildi  */}
        <Header osman='Simple calculator' />  



        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
            placeholder='Ilk Sayi'
            onChangeText={(text) => {
              this.setState({
                input1: text
              })
            }}
            value={this.state.input1}
          />

          <View style={styles.buttonWrapper}>
            <Button onPress={this.sum}
              color="#CDDC39"
              title='+'
            />
            <Button onPress={this.deduct}
              color="#841584"
              title='-'
            />
            <Button onPress={this.mult}
              color="#841584"
              title='*'
            />
            <Button onPress={this.div}
              color="#841584"
              title='/'
            />
          </View>

          <TextInput style={styles.input}
            placeholder='İkinci sayi '
            onChangeText={(text) => {
              this.setState({
                input2: text
              })
            }}
            value={this.state.input2}
          />



          <Text style={styles.sampleText}>Result = {this.state.result} </Text>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  },
  input: {
    height: 40
  },
  sampleText: {
    height: 30,
    fontSize: 14
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    //alignContent:'space-between'
  },
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
  welcome: {
    fontSize: 20,
    textAlign: 'center'
  }
})



