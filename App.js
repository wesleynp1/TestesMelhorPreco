import React,{Component} from 'react';
import {View,Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PaginaInicial from './src/Pages/PaginaInicial';
import PaginaSecundaria from './src/Pages/PaginaSecundaria';

const Tab = createBottomTabNavigator();

class App extends Component
{
  render()
  { 
      
    return(
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen name={"Inicial"}>
            {()=>{return(<PaginaInicial/>)}}
          </Tab.Screen>

          <Tab.Screen name={"Secundária"}>
          {()=>{return(<PaginaSecundaria/>)}}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
