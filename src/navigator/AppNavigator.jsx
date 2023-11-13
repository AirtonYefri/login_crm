import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login.jsx';  
import Inicio_modal from '../modals/modal_inicio_chat.jsx';
import Home from '../screens/Home.jsx';
import Prueba from '../screens/prueba.jsx';
import CrearNuevaCuenta from '../inicio/CrearNuevaCuenta.jsx';
//import Header from '../components/header_2.jsx';
import HeaderLeft from '../header/HeaderLeft.jsx';
import HeaderRight from '../header/HeaderRight.jsx';

const Stack = createStackNavigator();

const screens = [
  { name: 'Login', component: Login, title: '' },
  { name: 'Inicio_modal', component: Inicio_modal, title: 'Inicio' },
  { name: 'CrearNuevaCuenta', component: CrearNuevaCuenta, title: '' },
  { name: 'Prueba', component: Prueba, title: '' },
  { name: 'Home', component: Home, title: '' },
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
                options={({ navigation }) => ({
                  title: screen.title,
                  headerLeft: () => <HeaderLeft screenName={screen.name} navigation={navigation} />,
                  headerRight:() => <HeaderRight screenName={screen.name} navigation={navigation} />,
                })}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
    );
  };

export default AppNavigator;
