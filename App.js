import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/Cadastro';
import ListContacts from './screens/ListContacts';
import CadastroContato from './screens/CadastroContato';
import EditaContato from './screens/EditaContato';


const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
<Stack.Screen name="Cadastro" component={CadastroScreen}/>
<Stack.Screen name="Contacts" component={ListContacts} options={{headerShown:false}}/>
<Stack.Screen name="CadastroContato" component={CadastroContato}/>
<Stack.Screen name="EditaContato" component={EditaContato}/>
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;