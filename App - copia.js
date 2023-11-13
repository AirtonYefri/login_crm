import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/inicio/Main.jsx';
import CustomModal from './src/modals/modal_inicio_chat.jsx';
import CrearNuevaCuenta from './src/inicio/CrearNuevaCuenta.jsx';
import { Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const screens = [
  { name: 'Login', component: LoginScreen, title: '' },
  { name: 'Home', component: CustomModal, title: 'Inicio' },
  { name: 'CrearNuevaCuenta', component: CrearNuevaCuenta, title: '' },
  // Agrega más pantallas según tus necesidades
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={({ navigation }) => ({
              title: screen.title,
              headerLeft: () => {
                if (screen.name === 'Login') {
                  return null; // No mostrar nada en la pantalla "Login"
                }
                // Muestra el ícono de menú en otras pantallas
                return (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={{ uri: 'https://negslab-img-recursos.s3.amazonaws.com/landing_negocia_logo.png' }}
                    style={{ width: 60, height: 35, marginRight: 10 }}
                  />
                  <Ionicons
                    name="menu"
                    size={30}
                    color="#000"
                    onPress={() => {
                      // Aquí debes mostrar tu menú desplegable o navegar a una pantalla de menú
                      // Puedes utilizar una biblioteca de menú desplegable personalizada o mostrar un Modal
                    }}
                  />
                </View>
                );
              },
              headerRight: () => {
                if (screen.name === 'Login') {
                  return null; // No mostrar nada en la pantalla "Login"
                }
                // Muestra el ícono de menú en otras pantallas
                return (
                  <Ionicons
                    name="home"
                    size={30}
                    color="#000"
                    onPress={() => {
                      // Aquí debes mostrar tu menú desplegable o navegar a una pantalla de menú
                      // Puedes utilizar una biblioteca de menú desplegable personalizada o mostrar un Modal
                    }}
                  />
                );
              },
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
