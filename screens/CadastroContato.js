import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import axios from 'axios';

export default function CadastroContato({route,navigation}) {

    const  [getNome,setNome] = useState();
    const  [getTelefone,setTelefone] = useState();
    const  [getEmail,setEmail] = useState();



    function inserirDados(){
        
        axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            telefone: getTelefone,
            email: getEmail
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });     
        
    }

    return (
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-evenly', alignItems:"center"}}>

                <Input 
                    placeholder='Nome'
                    containerStyle = {{width:350}}
                    onChangeText={text => setNome(text)}
                />
                 <Input 
                    placeholder='Email'
                    containerStyle = {{width:350}}
                    onChangeText={text => setEmail(text)}
                 />
                 <Input 
                    placeholder='Telefone'
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