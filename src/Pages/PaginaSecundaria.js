import React,{Component} from 'react';
import {View,Text} from 'react-native';

class PaginaSecundaria extends Component
{
    render()
    {
        return(
        <View style={{flex:1, alignItems:'center',backgroundColor:'red'}}>
            <Text style={{fontSize:24}}>Novo projeto iniciado</Text>
            <Text style={{fontSize:24}}>Também exibiremos o texto teste:{this.props.textoTeste}</Text>
            <Text   onPress={()=>{this.props.botaoApertado("Pagina Secundario alterou o texto")}} 
                    style={{fontSize:24, backgroundColor: 'blue'}}>Pressione para mudar o texto</Text>
        </View>
        )
    }
}

export default PaginaSecundaria;