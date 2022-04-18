import { StyleSheet, Text, View } from 'react-native';
import { Input,Button } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, ListItem,Header } from 'react-native-elements';


export default function ListContacts({route,navigation}) {
    return (
        <>
        <Header
        containerStyle={{backgroundColor:'#5c5c5c'}}
        rightComponent={{ icon: 'plus', type: 'font-awesome', color: '#fff',   iconStyle: { color: '#fff',fontSize: 25 }, onPress:()=>navigation.navigate('CadastroContato') }}
        centerComponent={{ text: 'Cadastro', style: { color: '#fff', fontSize: 25 } }}
        />
        <View>
            <ListItem onPress={()=>navigation.navigate('EditaContato')}>
                <Avatar
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle = {{backgroundColor:"#5c5c5c"}}
                />
                <ListItem.Content>
                    <ListItem.Title>Marlysson Mendes</ListItem.Title>
                    <ListItem.Subtitle>(81)9xxxx-xxxx</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            <ListItem>
                <Avatar
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle = {{backgroundColor:"#5c5c5c"}}
                />
                <ListItem.Content>
                    <ListItem.Title>Valdemir Filho</ListItem.Title>
                    <ListItem.Subtitle>(81)9xxxx-xxxx</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            <ListItem>
                <Avatar
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle = {{backgroundColor:"#5c5c5c"}}
                />
                <ListItem.Content>
                    <ListItem.Title>Ronnyeri Marinho</ListItem.Title>
                    <ListItem.Subtitle>(81)9xxxx-xxxx</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            <ListItem>
                <Avatar
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle = {{backgroundColor:"#5c5c5c"}}
                />
                <ListItem.Content>
                    <ListItem.Title>Lucas Nobrega</ListItem.Title>
                    <ListItem.Subtitle>(81)9xxxx-xxxx</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            </View>
            </>
    );
}