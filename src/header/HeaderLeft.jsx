import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MenuDropdown from './MenuDropdown';

const Header = ({ screenName }) => {

  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Opción 1', 'Opción 2', 'Opción 3']; // Define las opciones del menú

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsMenuVisible(false);
    // Realiza alguna acción basada en la opción seleccionada
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };  

  const Inicio_left = () => {
    // Navega a la pantalla deseada aquí
    navigation.navigate('Home'); // Reemplaza 'OtraPantalla' con la ruta de la pantalla a la que deseas navegar debe de colocar en App.js
  }; 
  if (screenName === 'Login') {
    return null; // No mostrar nada en la pantalla "Login"
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
       <TouchableOpacity onPress={Inicio_left}>
      <Image
        source={{ uri: 'https://negslab-img-recursos.s3.amazonaws.com/landing_negocia_logo.png' }}
        style={{ width: 65, height: 35, marginRight: 10, marginLeft: 10, }}
      />
      </TouchableOpacity>
      <Ionicons
        name="menu"
        size={30}
        color="#000"
        onPress={toggleMenu}
      />
      <MenuDropdown isVisible={isMenuVisible} options={options} onSelect={openDrawer} />
    </View>
  );
};

export default Header;
