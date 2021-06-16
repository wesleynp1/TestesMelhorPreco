import React,{Component} from 'react';
import {View,Text} from 'react-native';

class PaginaTercearia extends Component
{
    render()
    {
        return(
        <View style={{flex:1, alignItems:'center',backgroundColor:'green'}}>
            <Text style={{fontSize:24}}>Novo projeto começado</Text>
            <Text style={{fontSize:24, color: 'blue'}}>exibiremos o texto teste em azul:{this.props.textoTeste}</Text>
        </View>
        )
    }
}

export default PaginaTercearia;