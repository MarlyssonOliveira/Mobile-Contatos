import { StyleSheet, Text, View } from 'react-native';
import { Input,Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, ListItem,Header } from 'react-native-elements';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { getAuth, signOut } from "firebase/auth";

export default function ListContacts({route,navigation}) {

    const auth = getAuth();
    function deslogar(){
        signOut(auth).then(() => {
            // Sign-out successful.
                navigation.navigate('Login')
            }).catch((error) => {
            // An error happened.
                console.log(error)
            });
    }
    


    const [getContatos, setContatos] = useState([]);
    function consultarDados(){

        axios.get('http://professornilson.com/testeservico/clientes')
        
        .then(function (response) {
            setContatos(response.data);
        }).catch(function (error) {
            console.log(error);
        
        });
    }


    useEffect(()=>{
        consultarDados()
    }, [getContatos])



    return (
        <>
        <Header
        containerStyle={{backgroundColor:'#5c5c5c'}}
        leftComponent={{ icon: 'power-off', type: 'font-awesome', color: '#fff',   iconStyle: { color: '#fff',fontSize: 23 }, onPress:()=> deslogar() }}
        leftContainerStyle={{display:"flex",justifyContent:"center"}}
        rightComponent={{ icon: 'plus', type: 'font-awesome', color: '#fff',   iconStyle: { color: '#fff',fontSize: 23 }, onPress:()=>navigation.navigate('CadastroContato') }}
        rightContainerStyle={{display:"flex",justifyContent:"center"}}
        centerComponent={{ text: 'Cadastro', style: { color: '#fff', fontSize: 25 } }}
        />
        <ScrollView>
        {
        getContatos.map((contato) => (

        
        <ListItem onPress={()=>navigation.navigate('EditaContato',{
            nome:contato.nome,
            telefone:contato.telefone,
            email:contato.email,
            cpf:contato.cpf,
            id:contato.id,
         })} key={contato.id}>
            <Avatar
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            activeOpacity={0.7}
            containerStyle = {{backgroundColor:"#5c5c5c"}}
            
            />
            <ListItem.Content>
                <ListItem.Title>{contato.nome}</ListItem.Title>
                <ListItem.Subtitle>{contato.telefone}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
        </ListItem>
        ))
        }
                
                </ScrollView>
            </>
    );
}