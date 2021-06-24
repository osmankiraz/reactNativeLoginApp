import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';

class Converter extends Component {

    constructor(props){
        super(props);
        this.state={
            tl:'',
            usd:'',
            cad:'',
            jpy:'',
            eur:'',
            input:'',
            rates:[]
        }

        this.getRates=this.getRates.bind(this);
    }

    getRates(){
        axios.get('http://data.fixer.io/api/latest?access_key=4c556a81de1ba1dffb4b1767ae0d2f2e&symbols=EUR,USD,CAD,JPY,TRY')
            .then(response => {
                console.log(response);
                const rates = response.data.rates;
                this.setState({
                    rates: rates
                })
            })
    }
    
    //  AXIOS KUTUPHANESİNİ KULLANACAĞIZ  API DEN JSON OLARAK VERİ OKUYABİLMEK İCİN

    componentDidMount(){
       this.getRates();
    }
    

    render() {

        {/*render içerisinde noktolı virgül kullanma ve render süslü parantez ile return yay parantez ile   */ }
        const { converterWrapper,inputStyle,textStyle } = styles;
        const { input, usd, cad, jpy, eur, tl,rates} = this.state;
        return (

          <View style = { converterWrapper }>
              <TextInput placeholder='Enter EUR Value'
                  style={inputStyle}
                  keyboardType='numeric'
                  onChangeText={(text) => {
                        const i =parseFloat(text) || 0;

                          this.setState({
                              input:text,
                              tl:(i * rates ['TRY']).toFixed(3),
                              usd:(i * rates ['USD']).toFixed(3),
                              cad:(i * rates ['CAD']).toFixed(3),
                              jpy:(i * rates ['JPY']).toFixed(3),
                              eur:(i * rates ['EUR']).toFixed(3)
                          })
                  }}
                  value ={input} />


              <Text style={textStyle}>TRY: {tl}</Text>
              <Text style={textStyle}>USD: {usd}</Text>
              <Text style={textStyle}>CAD: {cad}</Text>
              <Text style={textStyle}>JPY: {jpy}</Text>
              <Text style={textStyle}>EUR: {eur}</Text>
          </View >
        )
    }
}



const styles = StyleSheet.create({
    converterWrapper: {
        //backgroundColor:'blue',
        paddingTop:30,
        paddingBottom:10,
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    inputStyle: {
        width:200,
        height:40,
        //backgroundColor:'red'
    },
    textStyle:{
        //backgroundColor:'yellow',
        fontWeight:'bold',
        width:170,
        height:50
    }

});

export default Converter;
