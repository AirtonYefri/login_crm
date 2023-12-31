import React, { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';
import {StyleSheet, Text, View, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para la navegación

import AsyncStorage from '@react-native-async-storage/async-storage';


import { styles } from '../style/styles.jsx'; 

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const navigation = useNavigation(); // Obtiene la función de navegación


  const handleLogin = async () => {
    if (isChecked) {
      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('password', password);
    }

    try {
      // Aquí debes enviar las credenciales al backend para la autenticación
      // Si la autenticación es exitosa, puedes redirigir al usuario a la pantalla de inicio de la aplicación
      // De lo contrario, muestra un mensaje de error
      if (email === 'usuario@example.com' && password === '123456') {
        navigation.navigate('Home'); // Navega a la pantalla de inicio (HomeScreen)
      } else {
        Alert.alert('Error', 'Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      Alert.alert('Error', 'Inicio de sesión fallido');
    }
  };
 
  useEffect(() => {
    // Recuperar el correo y la contraseña guardados
    AsyncStorage.getItem('email').then((storedEmail) => {
      if (storedEmail) {
        setEmail(storedEmail);
      }
    });

    AsyncStorage.getItem('password').then((storedPassword) => {
      if (storedPassword) {
        setPassword(storedPassword);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image_inicio_div} >
      <Image
        source={{ uri: 'https://negslab-img-recursos.s3.amazonaws.com/landing_negocia_logo.png' }}
        style={styles.image_inicio}
      />
      </View>
  
<Text style={styles.text_inicio}>Hola Bienvenido!</Text>
      <TextInput style={styles.input_inicio}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput style={styles.input_inicio}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View>
      <View style={styles.checkboxContainer_general}>
        <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.label}> Recordar Cuenta</Text>
        </View>
       <View><Text style={styles.btnText_Registrar}>Olvidé mi clave</Text></View>
      
      </View>
      
    </View>
      <TouchableOpacity
        style={styles.btn_inicio} // Cambia el color de fondo aquí
        onPress={handleLogin}
      >
      <Text style={styles.btnText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer_general}>
      <View style={styles.checkboxContainer}>
      <Text>¿Aún no tienes una cuenta?</Text>
      </View> 
      <View>
      <Text style={styles.btnText_Registrar}> Regístrate aquí</Text>
      </View>
      </View>
      
    
    </View>
  );
}



export default LoginScreen;
