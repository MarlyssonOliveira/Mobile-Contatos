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
            const { cpf } =  route.params


            setNome(nome)
            setTelefone(telefone)
            setCpf(cpf)
            setId(id)

        }
  
              
        
        
    },[])

    function alterarDados(){

        axios.put('http://professornilson.com/testeservico/clientes/'+getId
        ,
        
        {
        nome: getNome,
        telefone: getTelefone,
        email: getEmail,
        cpf: getCpf
        }).then(function (response) {
            
            console.log(response.config.data);
            navigation.navigate('Contacts')
            console.log('Editado!')
        }).catch(function (error) {
           
            console.log(error);
            console.log('Erro na Edição!')
        
        });
        
        }

        function excluirDados(){

            axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
            .then(function (response) {
                
                console.log(response);
                navigation.navigate('Contacts')
                console.log('Excluido')
                
            }).catch(function (error) {
                
                console.log(error);
                console.log('Erro na exclusão')
            
            });
            
            }
    
    return (
        
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-evenly', alignItems:"center"}}>
                
                 <Input
                    label='Nome'
                    onChangeText={text => setNome(text)}
                    value={getNome || ''}
                    containerStyle = {{width:350}}
                />
                 <Input 
                 label='CPF'
                 onChangeText={text => setCpf(text)}
                 value={getCpf || ''}
                    containerStyle = {{width:350}}
                 />
                 <Input 
                 label='Telefone'     
                 onChangeText={text => setTelefone(text)}
                value={getTelefone || ''}
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