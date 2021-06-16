import React,{Component} from 'react';
import {View,Text} from 'react-native';

class PaginaSecundaria extends Component
{
    render()
    {
        return(
        <View style={{flex:1, alignItems:'center',backgroundColor:'red'}}>
            <Text style={{fontSize:24}}>Novo projeto iniciado</Text>
        </View>
        )
    }
}

export default PaginaSecundaria;