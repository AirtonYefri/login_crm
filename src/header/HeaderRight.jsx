import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../style/styles.jsx';

const HeaderRight = ({ screenName }) => {
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeSession = () => {
    // Realiza las acciones para cerrar la sesión aquí
  };

  if (screenName === 'Login') {
    return null; // No mostrar nada en la pantalla "Login"
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {screenName !== 'Login' && (
        <>
          <TouchableOpacity onPress={toggleMenu}>
          <Image
         source={{ uri: 'https://negslab-img-usuario.s3.amazonaws.com/2_1684863069_23052023123109_16848630692.png' }}// Asegúrate de proporcionar la ruta correcta de la imagen
          style={{ width: 40, height: 40, borderRadius: 25, marginRight: 10, backgroundColor: '#74788d', }}
        />
          </TouchableOpacity>
          {isMenuVisible && (
            <OptionsMenu closeMenu={() => setIsMenuVisible(false)} closeSession={closeSession} />
          )}
        </>
      )}
    </View>
  );
};

const OptionsMenu = ({ closeMenu, closeSession }) => {
  const slideIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(slideIn, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.menu,
        {
          transform: [
            {
              translateX: slideIn.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity onPress={closeSession}>
        <Text>Cerrar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={closeMenu}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};


export default HeaderRight;
