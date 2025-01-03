import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/buttons/button';
import Login from './src/pages/login/Login';
import Cadastro from './src/pages/cadastro/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RecuperarSenha from './src/pages/recuperarSenha/RecuperarSenha';
import Dashboard from './src/pages/dashboard/Dashboard'; // Importar o Dashboard

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ headerShown: false }} // Esconder o cabeçalho no Dashboard, se necessário
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
