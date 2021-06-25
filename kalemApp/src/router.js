import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import HomePage from './components/homePage';
import LoginForm from './components/loginForm';
import Register from './components/register';

const RouterComp = ()=>{
    return (
        <Router>
            <Scene key='root' hideNavBar={true}>

                <Scene key='auth'>
                    <Scene key='login'
                        component={LoginForm}
                        title='Login'
                        hideNavBar={true}
                        initial />
                    <Scene key='register'
                            component={Register}
                    />

                </Scene>

                <Scene key='main' >
                    <Scene key='home' component={HomePage} title='Home Ekranı' initial />
                </Scene>


            </Scene>
        </Router>
    )
}

export default RouterComp;
