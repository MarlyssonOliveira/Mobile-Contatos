import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar,Header  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro({route,navigation}) {


    const  [getNome,setNome] = useState();
    const  [getSenha,setSenha] = useState();
    const  [getEmail,setEmail] = useState();
    const  [getCpf,setCpf] = useState();




    function inserirDados(){
        
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            senha: getSenha,
            email: getEmail,
            cpf: getCpf
          })
          .then(function (response) {
            console.log(response.config.data);
            console.log('Cadastrado com Sucesso')
          })
          .catch(function (error) {
            console.log(error);
            console.log('Erro ao cadastar')
          });     
        
    }
    return (
        <>      
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-around', alignItems:"center"}}>
                
                <Input 
                    label='Nome'
                    placeholder='Digite seu nome...'
                    containerStyle = {{width:350}}
                    onChangeText={text => setNome(text)}

                />
                <Input 
                    label='CPF'
                    placeholder='Digite seu CPF...'
                    containerStyle = {{width:350}}
                    onChangeText={text => setCpf(text)}

                 />
                 <Input
                    label='Email' 
                    placeholder='Digite seu email...'
                    containerStyle = {{width:350}}
                    onChangeText={text => setEmail(text)}

                 />
                 <Input
                    label='Senha' 
                    placeholder='Digite sua senha...'
                    containerStyle = {{width:350}}
                    onChangeText={text => setSenha(text)}
                    type="password"
                 />

                <Button 
                    onPress={()=> inserirDados()}
                    type="Solid Button"
                    title="Cadastrar"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#60ab22',marginTop: 10}}
                />

            
        </View>
        </>
    );
}