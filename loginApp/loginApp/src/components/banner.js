import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Banner extends Component{
    render (){
        return(
            <View style={styles.bannerContainer}>
                                                    
                    <Text style={styles.bannerText}> {this.props.bannerText} </Text> 

            </View>

        )
    }
}

const styles = StyleSheet.create({
    bannerContainer:{
        width: 'auto', //  [height : '20'] yanlış || [height : 20] doğru tanımlama
        height:250,
        backgroundColor:'#E87B79',
        justifyContent:'center',
        alignItems:'center'
    },
    bannerText:{
        fontSize: 34,
        color:'white'
    }


});


export default Banner ;