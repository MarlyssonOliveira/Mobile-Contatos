import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CadastroContato({route,navigation}) {
    return (
        <View style={{flex:1, flexDirection:"column", justifyContent:'space-evenly', alignItems:"center"}}>

                <Input 
                    value='Marlysson'
                    placeholder='Nome'
                    containerStyle = {{width:350}}
                />
                 <Input 
                 value='marlysson@gmail.com'
                    placeholder='Email'
                    containerStyle = {{width:350}}
                 />
                 <Input 
                 value='99999999'
                    placeholder='Telefone'
                    containerStyle = {{width:350}}
                 />

                <Button 
                    type="Solid Button"
                    title="Alterar"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#60ab22',marginTop: 10}}
                />
                <Button 
                    type="Solid Button"
                    title="Excluir"
                    titleStyle={{color:"#FFF"}}
                    buttonStyle= {{ width:300, backgroundColor:'#d94141',marginTop: 10}}
                />

            
        </View>
    );
}