import React, { useState, useEffect, useRef } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Animated, Easing, Modal  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de importar los iconos correctos
import SearchComponent from '../components/SearchComponent.jsx';
import CustomModal from '../modals/modal_inicio_chat.jsx';
import { styles } from '../style/styles.jsx';

const HeaderChatCrm = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Seleccione');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isAdditionalMenuVisible, setIsAdditionalMenuVisible] = useState(false); // Estado para el menú adicional
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const textInputRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible && textInputRef.current) {
      textInputRef.current.focus();
    }
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };

   const openModal = () => {
    setModalVisible(true);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const toggleMenuEllipsis = () => {
    setIsAdditionalMenuVisible(!isAdditionalMenuVisible);
  };
  const closeSession = () => {
    // Realiza las acciones para cerrar la sesión aquí
  };
  // Uso del componente OptionsMenu


  const [options] = useState([
    { id: 1, text: 'Mensaje Masivo Grupos', icon: 'people-outline', action: () => mostrarModalMasivos(1) },
    { id: 2, text: 'Mensaje Masivo Chats', icon: 'chatbubbles-outline', action: () => mostrarModalMasivos(2) },
    { id: 3, text: 'Mensaje Masivo Contactos', icon: 'chatbubbles-outline', action: () => mostrarModalMasivos(3) },
    { id: 4, text: 'Mensaje Masivo Mis asignaciónes', icon: 'chatbubbles-outline', action: () => mostrarModalMasivos(4) },
    { id: 5, text: 'Mensaje Masivo Embudo', icon: 'chatbubbles-outline', action: () => mostrarModalMasivos(5) },
  ]);
  
  const additionalOptions = [ // Arreglo de opciones adicionales
  { id: 6, text: 'Crear Contacto',  icon: '', action: () => mostrarModalMasivos(6) },
  { id: 7, text: 'Cambiar Área de Canales',  icon: '', action: () => mostrarModalMasivos(7) },
];

  const mostrarModalMasivos = (id) => {
    // Lógica para mostrar el modal correspondiente
    switch (id) {
      case 1:
        setModalVisible(true);
        break;
      case 2:
        setModalVisible(true);
        break;
      case 3:
        setModalVisible(true);
        break;
      case 4:
        setModalVisible(true);
        break;
      case 5:
        setModalVisible(true);
        break;
      case 6:
        setModalVisible(true);
        break;
      case 7:
        setModalVisible(true);
        break;
      default:
        setModalVisible(false)
    }
  };

  return (
    <View>
       <CustomModal visible={modalVisible} closeModal={closeModal} />
      <View style={{ paddingTop: 16, paddingLeft: 16, paddingRight:16,  }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
         source={{ uri: 'https://negslab-img-recursos.s3.amazonaws.com/avatar-1.jpg' }}// Asegúrate de proporcionar la ruta correcta de la imagen
          style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <View  style={styles.NombreChat}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>Airton Yefri</Text>
            <Ionicons style={{ }} name="ellipse" size={10} color="#2ab57d" />
            </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={toggleSearch}>
          <Ionicons style={{ paddingRight: 10 }} name="search" size={22} color="#495057" />
          </TouchableOpacity>
          <TouchableOpacity
           // onPress={() => setIsDropdownVisible(!isDropdownVisible)}
           onPress={toggleMenu}
          >
          <Ionicons style={{ paddingRight: 10 }} name="person" size={22} color="#495057" />
          </TouchableOpacity>
          {isMenuVisible && (
            <OptionsMenu options={options} closeMenu={() => setIsMenuVisible(false)} closeSession={closeSession} />
          )}
         
          <TouchableOpacity
           // onPress={() => setIsDropdownVisible(!isDropdownVisible)}
           onPress={toggleMenuEllipsis}
          >
          <Ionicons name="ellipsis-vertical" size={22} color="#495057" />
          </TouchableOpacity>
          {isAdditionalMenuVisible && (
          <OptionsMenu options={additionalOptions} closeMenu={() => setIsAdditionalMenuVisible(false)} closeSession={closeSession} />
          )}
          
          
          </View>
         
          </View>
         
         <View>
         <Picker
           style={styles.SelectChat}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Seleccione" value="0" />
  <Picker.Item label="Mís Asignados" value="1" />
  <Picker.Item label="Contactos" value="2" />
</Picker>
    </View>

        </View>
      </View>
      </View>

     <View>
     {searchVisible && (
        <SearchComponent
          searchVisible={searchVisible}
          setSearchVisible={setSearchVisible}
          searchText={searchText}
          setSearchText={setSearchText}
          textInputRef={textInputRef}
        />
      )}
     </View>
    </View>
  );
};

const OptionsMenu = ({ options, closeMenu, closeSession }) => {
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
          backgroundColor: 'rgb(255, 255, 255)',
          zIndex: 9,
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
      {options.map((option) => (
  <TouchableOpacity key={option.id} onPress={option.action}>
    <View style={styles.optionContainer}>
      <Ionicons style={styles.optionIcono} name={option.icon} size={24} color="#495057" />
      <Text style={styles.optionText}>{option.text}</Text>
    </View>
  </TouchableOpacity>
))}
    </Animated.View>
  );
};



export default HeaderChatCrm;
