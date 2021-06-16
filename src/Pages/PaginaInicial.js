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
            <Text onPress={this.props.botaoApertado} style={{fontSize:36, backgroundColor: 'red'}}>botão teste</Text>
        </View>
        )
    }
}

export default PaginaInicial;