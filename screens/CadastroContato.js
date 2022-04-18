import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CadastroContato({route,navigation}) {
    return (
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-evenly', alignItems:"center"}}>

                <Input 
                    placeholder='Nome'
                    containerStyle = {{width:350}}
                />
                 <Input 
                    placeholder='Email'
                    containerStyle = {{width:350}}
                 />
                 <Input 
                    placeholder='Telefone'
                    containerStyle = {{width:350}}
                 />

                <Button 
                    type="Solid Button"
                    title="Salvar"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#5c5c5c',marginTop: 10}}
                />

            
        </View>
    );
}