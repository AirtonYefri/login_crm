import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomNavigationBar from '../navigator/NavigationChatCRM.jsx';
import HeaderChatCrm from '../header/HeaderChatCrm.jsx';
import { styles } from '../style/styles.jsx';

// Componente ChatScreen
function ChatScreen() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [chats, setChats] = useState([
    { id: 1, content: 'Mensaje 1', group: 'Familia', hasResponse: true },
    { id: 2, content: 'Mensaje 2', group: 'Trabajo', hasResponse: false },
    { id: 3, content: 'Mensaje 3', group: 'Amigos', hasResponse: true },
    // ... otros chats
  ]);

  

  // Funciones lógicas
  const handleSearch = () => {
    // Lógica para manejar la búsqueda
    console.log('Búsqueda:', searchText);
  };

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    // Puedes realizar acciones específicas cuando se cambia la pestaña
  };

  const handleSelectGroup = () => {
    // Lógica para manejar la selección de grupo
    Alert.alert(
      'Seleccionar Grupo',
      null,
      availableGroups.map((group) => ({
        text: group,
        onPress: () => {
          setSelectedGroup(group);
        },
      })),
    );
  };

  // Función de filtrado
const filteredChats = () => {
  switch (activeTab) {
    case 0: // Todos
      return chats;
    case 1: // Sin responder
      return chats.filter((chat) => !chat.hasResponse);
    case 2: // Grupos
      return chats.filter((chat) => chat.group === 'Amigos'); // Cambia 'Amigos' por el grupo deseado
    default:
      return chats;
  }
};


  // Renderización
  return (
    <View style={{ flex: 1 }}>
      <HeaderChatCrm />
      <View style={{ marginTop: 15 }}>
        <CustomNavigationBar activeTab={activeTab} onTabPress={handleTabPress} onSelectGroup={handleSelectGroup} />
      </View>
      <TextInput
        placeholder="Buscar mensajes"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onBlur={handleSearch}
      />
      {selectedGroup && (
        <Text>Chats del grupo: {selectedGroup}</Text>
      )}
      {filteredChats().map((chat) => (
        <Text key={chat.id}>{chat.content}</Text>
      ))}
    </View>
  );
}

export default ChatScreen;
