import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar,Header  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import axios from 'axios';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Cadastro({route,navigation}) {

    const firebaseConfig = {
        apiKey: "AIzaSyClrko5dbeXr5nNNjIRkOrqB1C3tlCQu0w",
        authDomain: "atividade-mobile-f6905.firebaseapp.com",
        projectId: "atividade-mobile-f6905",
        storageBucket: "atividade-mobile-f6905.appspot.com",
        messagingSenderId: "267169267372",
        appId: "1:267169267372:web:41f12e2f7361226adfe909"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
      
        const auth = getAuth();
        const  [getSenha,setSenha] = useState();
        const  [getEmail,setEmail] = useState();

    function inserirDados(){
        createUserWithEmailAndPassword(auth, getEmail, getSenha)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        });
    }
    return (
        <>      
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-around', alignItems:"center"}}>
                
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