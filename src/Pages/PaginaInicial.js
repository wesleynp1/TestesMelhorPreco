import React,{Component} from 'react';
import {View,Text} from 'react-native';

class PaginaInicial extends Component
{    
    render()
    {
        return(
        <View style={{flex:1, alignItems:'center',backgroundColor:'blue'}}>
            <Text style={{fontSize:36}}>Novo projeto iniciado</Text>
            <Text style={{fontSize:36}}>{this.props.textoTeste}</Text>
            <Text onPress={()=>{this.props.botaoApertado("Pagina Inicial alterou o texto")}} style={{fontSize:36, backgroundColor: 'red'}}>botão teste</Text>
            <Text onPress={()=>{this.props.botaoAddLoja("loja da primeira página","à esquerda da tela")}} style={{fontSize:36, backgroundColor: 'red'}}>Add loja</Text>
        </View>
        )
    }
}

export default PaginaInicial;