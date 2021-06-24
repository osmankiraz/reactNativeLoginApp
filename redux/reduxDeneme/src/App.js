import React ,{Component} from 'react' ;
import {Text,View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';




export default class App extends Component {
  render (){
    return(
      <Provider store ={createStore(reducers)}>
        <View>
          <Text> osman kiraz deneme</Text>
        </View>
      </Provider>
      
    );
  }
}