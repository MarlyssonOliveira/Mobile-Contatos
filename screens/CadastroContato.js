import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import axios from 'axios';

export default function CadastroContato({route,navigation}) {

    const  [getNome,setNome] = useState();
    const  [getTelefone,setTelefone] = useState();
    const  [getCpf,setCpf] = useState();

    

    function inserirDados(){
        
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf
          })
          .then(function (response) {
            console.log(response.config.data);
            navigation.navigate('Contacts')
            console.log('Contato cadastrado com sucesso')
            console.log(getEmail)

          })
          .catch(function (error) {
            alert('Erro')

            console.log(error);
            console.log('Contato não cadastrado')

          });     
        
    }

    return (
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-evenly', alignItems:"center"}}>

                <Input 
                    label='Nome'
                    placeholder='Digite o nome do contato...'
                    containerStyle = {{width:350}}
                    onChangeText={text => setNome(text)}
                />
                 <Input 
                    label='CPF'
                    placeholder='Digite o cpf do contato...'
                    containerStyle = {{width:350}}
                    onChangeText={text => setCpf(text)}
                 />
                 <Input 
                    label='Telefone'
                    placeholder='Digite o telefone do contato...'
                    onChangeText={text => setTelefone(text)}
                    containerStyle = {{width:350}}
                 />

                <Button 
                    onPress={()=> inserirDados()}
                    type="Solid Button"
                    title="Salvar"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#5c5c5c',marginTop: 10}}
                />

            
        </View>
    );
}