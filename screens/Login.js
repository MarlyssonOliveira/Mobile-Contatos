import { StyleSheet, Text, View } from 'react-native';
import { Input,Button,Avatar  } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login({route,navigation}) {
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
                    placeholder='Login'
                    containerStyle = {{width:350}}
                />
                <Input 
                    placeholder='Senha'
                    containerStyle = {{width:350}}
                 />
                <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                    <Button 
                        type="Solid Button"
                        title="Login"
                        titleStyle={{color:"#FFF"}}
                        containerStyle = {{width:150, backgroundColor:"#5c5c5c", marginTop: 25}}
                        onPress={()=>navigation.navigate('Contacts')}
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