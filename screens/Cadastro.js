import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar,Header  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Cadastro({route,navigation}) {
    return (
        <>      
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-around', alignItems:"center"}}>
                
                <Input 
                    placeholder='Nome'
                    containerStyle = {{width:350}}
                />
                <Input 
                    placeholder='CPF'
                    containerStyle = {{width:350}}
                 />
                 <Input 
                    placeholder='Email'
                    containerStyle = {{width:350}}
                 />
                 <Input 
                    placeholder='Senha'
                    containerStyle = {{width:350}}
                 />

                <Button 
                    type="Solid Button"
                    title="Cadastrar"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#60ab22',marginTop: 10}}
                />

            
        </View>
        </>
    );
}