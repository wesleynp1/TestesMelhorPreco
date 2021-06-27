import React,{Component} from 'react';
import {View,Text, FlatList, Button, SafeAreaView} from 'react-native';

const dados = [
            {
                id:1,
                Nome: "Primeira loja",
                Localizacao: "Avenida qualquer"
            },
            {
                id:2,
                Nome: "Segunda loja",
                Localizacao: "Avenida qualquer 2"
            },
        ];

const renderLojas = ({item})=>{
    return(
        <View style={{backgroundColor:'red', margin: 10, alignContent:'center'}}>
            <Text>Nome: {item.Nome}</Text>
            <Text>Localizacao: {item.Localizacao}</Text>
        </View>
    )};

class PaginaTercearia extends Component
{
    constructor(props)
    {
        super(props);
        this.state={TesteFL: 0};
    }

    render()
    {
        let componentes = []

        for(let i=0;i<this.props.Lojas.length;i++)
        {
            componentes.push(<Text style={{fontSize:22}}>{this.props.Lojas[i].Nome}</Text>)
            console.log(this.props.Lojas[i].Nome);
        }
        
        return(
        <View style={{flex:1, alignItems:'center',backgroundColor:'green'}}>
            <Text style={{fontSize:24}}>Novo projeto começado</Text>
            <Text style={{fontSize:24}}>{this.props.Lojas.length}</Text>
            <Text style={{fontSize:24, color: 'blue'}}>exibiremos o texto teste em azul:{this.props.textoTeste}</Text>

            <SafeAreaView style={{flex:5}}>
                <FlatList  data={this.props.Lojas} renderItem={renderLojas} extraData={this.props.Lojas.length}/>
            </SafeAreaView>

            <Button style={{flex:5}} title={"aumentar o número"} onPress={()=>{this.setState(()=>{return {TesteFL: this.state.TesteFL+1}})}}/>
            

            <Text style={{fontSize:24}}>O número {this.state.TesteFL}</Text>
        </View>
        )
    }
}

export default PaginaTercearia;