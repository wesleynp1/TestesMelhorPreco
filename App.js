import React,{Component} from 'react';
import {View,Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import PaginaInicial from './src/Pages/PaginaInicial';
import PaginaSecundaria from './src/Pages/PaginaSecundaria';
import PaginaTercearia from './src/Pages/PaginaTercearia';

const Tab = createBottomTabNavigator();

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {textoTeste:"Este é apenas um texto teste do State de App.js"}
  }


  render()
  { 
     return(
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen name={"Inicial"}>
            {()=>{return(<PaginaInicial botaoApertado={this.botaoPressionado.bind(this)} textoTeste={this.state.textoTeste}/>)}}
          </Tab.Screen>

          <Tab.Screen name={"Secundária"}>
          {()=>{return(<PaginaSecundaria botaoApertado={this.botaoPressionado.bind(this)} textoTeste={this.state.textoTeste}/>)}}
          </Tab.Screen>

          <Tab.Screen name={"Tercearia"}> 
          {()=>{return(<PaginaTercearia textoTeste={this.state.textoTeste}/>)}}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  botaoPressionado()
  {
    var textpadrao = "Este é apenas um texto teste do State de App.js"

    if(this.state.textoTeste==textpadrao)
    {
      this.setState({textoTeste: "alterado com sucesso"})
    }
    else
    {
      this.setState({textoTeste: textpadrao})
    }
  }
}

export default App;