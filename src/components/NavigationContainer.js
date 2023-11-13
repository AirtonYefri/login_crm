import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CrearNuevaCuentaScreen from '../screens/CrearNuevaCuentaScreen';
import Header from './header_2';

const Stack = createStackNavigator();

const screens = [
  { name: 'Login', component: LoginScreen, title: '' },
  { name: 'Home', component: HomeScreen, title: 'Inicio' },
  { name: 'CrearNuevaCuenta', component: CrearNuevaCuentaScreen, title: '' },
  // Agrega más pantallas según tus necesidades
];

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={({ route }) => ({
              title: screen.title,
              header: () => <Header screenName={screen.name} />,
            })}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
