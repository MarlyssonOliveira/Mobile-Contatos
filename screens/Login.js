import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function Login({route,navigation}) {

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
    const  [getSenha,setSenha] = useState();
    const  [getEmail,setEmail] = useState();
    
    function login(){
        const auth = getAuth();    
        signInWithEmailAndPassword(auth, getEmail, getSenha)
        .then((userCredential) => {
        // Signed in
            navigation.navigate('Contacts')
            const user = userCredential.user;
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }
    
    
    return (
        <View style={{flex:1, flexDirection:"column", justifyContent:'center', alignItems:"center"}}>
            <Avatar
                size="xlarge"
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle = {{backgroundColor:"#5c5c5c", marginBottom: 15}}
            />

                <Input 
                    label="Login"
                    containerStyle = {{width:350}}
                    onChangeText={text => setEmail(text)}
                />
                <Input 
                    label="Senha"
                    type="password"
                    containerStyle = {{width:350}}
                    onChangeText={text => setSenha(text)}
                 />
                <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                    <Button 
                        type="Solid Button"
                        title="Login"
                        titleStyle={{color:"#FFF"}}
                        containerStyle = {{width:150, backgroundColor:"#5c5c5c", marginTop: 25}}
                        onPress={() => login()}
                    />
                    <Button 
                        type="Solid Button"
                        title="Cadastre-se"
                        titleStyle={{color:"#FFF"}}
                        buttonStyle= {{width:150 , backgroundColor:'#5c5c5c',marginTop: 10}}
                        onPress={()=>navigation.navigate('Cadastro')}
                    />
                </View>

            
        </View>
    );
}