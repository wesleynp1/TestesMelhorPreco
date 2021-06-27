import React,{Component} from 'react';

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
    this.state = {
      textoTeste:"Este é apenas um texto teste do State de App.js",
      Lojas: [{id:0, Nome:"primeira loja",Localizacao:"endereço", produtos: []},
              {id:1, Nome:"Segunda loja",Localizacao:"endereço2", produtos: []}]
    }
    

    this.adicionarNovaLoja = this.adicionarNovaLoja.bind(this);
  }

  render()
  { 
     return(
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen name={"Inicial"}>
            {()=>{return(<PaginaInicial 
            botaoApertado={this.botaoPressionado.bind(this)} 
            botaoAddLoja={this.adicionarNovaLoja.bind(this)}
            textoTeste={this.state.textoTeste}/>)}}            
          </Tab.Screen>

          <Tab.Screen name={"Secundária"}>
          {()=>{return(<PaginaSecundaria botaoApertado={this.botaoPressionado.bind(this)} textoTeste={this.state.textoTeste}/>)}}
          </Tab.Screen>

          <Tab.Screen name={"Tercearia"}> 
          {()=>{return(<PaginaTercearia 
                        textoTeste={this.state.textoTeste} 
                        Lojas={this.state.Lojas}
                        NumeroDeLojas={this.state.Lojas.length}/>)}}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  botaoPressionado(novoTexto)
  {
    var textpadrao = "Este é apenas um texto teste do State de App.js"

    if(this.state.textoTeste==textpadrao)
    {
      this.setState({textoTeste: novoTexto})
    }
    else
    {
      this.setState({textoTeste: textpadrao})
    }
  }

  adicionarNovaLoja(nome,localizacao)
  {
    let NovaListaLojas = this.state.Lojas;
    NovaListaLojas.push({id:this.state.Lojas.length, Nome:nome, Localizacao:localizacao, produtos:[]})
    this.setState({Lojas: NovaListaLojas});
  }
}

export default App;