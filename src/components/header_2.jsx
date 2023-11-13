// DrawerMenu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function DrawerMenu({ navigation }) {
  const menuItems = [
    { name: 'Inicio', screen: 'Inicio' },
    { name: 'Perfil', screen: 'Perfil' },
    { name: 'Configuración', screen: 'Configuración' },
  ];

  return (
    <View>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default DrawerMenu;
