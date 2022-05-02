import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CadastroContato({route,navigation}) {

   const  [getNome,setNome] = useState();
   const  [getCpf,setCpf] = useState();
   const  [getTelefone,setTelefone] = useState();
   const  [getId,setId] = useState();
   const  [getEmail,setEmail] = useState();

    useEffect(()=>{
        
        if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params 
            const { id } =  route.params
            const { email } =  route.params
            const { cpf } =  route.params


            setNome(nome)
              setTelefone(telefone)
              setCpf(cpf)
              setId(id)
              setEmail(email)

        }
  
              
        
        
    },[])

    function alterarDados(){

        axios.put('http://professornilson.com/testeservico/clientes/'+getId
        ,
        
        {
        nome: getNome,
        telefone: getTelefone,
        cpf: getCpf
        }).then(function (response) {
        console.log(response);
        }).catch(function (error) {
        console.log(error);
        
        });
        
        }

        function excluirDados(){

            axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
            .then(function (response) {
            console.log(response);
            }).catch(function (error) {
            console.log(error);
            
            });
            
            }
    
    return (
        
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-evenly', alignItems:"center"}}>
                
                 <Input
                    
                    onChangeText={text => setNome(text)}
                    value={getNome || ''}
                    placeholder='Nome'
                    containerStyle = {{width:350}}
                />
                 <Input 
                 
                 onChangeText={text => setEmail(text)}
                 value={getEmail || ''}
                    placeholder='Email'
                    containerStyle = {{width:350}}
                 />
                 <Input 
                 
                 onChangeText={text => setTelefone(text)}
                value={getTelefone || ''}
                    placeholder='Telefone'
                    containerStyle = {{width:350}}
                 />
               

                <Button 
                    onPress={()=> alterarDados()}
                    type="Solid Button"
                    title="Alterar"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#60ab22',marginTop: 10}}
                />
                <Button 
                    onPress={()=> excluirDados()}
                    type="Solid Button"
                    title="Excluir"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#d94141',marginTop: 10}}
                />


        </View>
        
    );
}