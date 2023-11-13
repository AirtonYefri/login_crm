import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Animated, Easing } from 'react-native';

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
  
  
  export default OptionsMenu;