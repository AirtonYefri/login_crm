import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de que la importación sea correcta
import CustomNavigationBar from '../navigator/NavigationChatCRM.jsx';
import HeaderChatCrm from '../header/HeaderChatCrm.jsx';
import { styles } from '../style/styles.jsx';

function ChatScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Aquí puedes agregar la lógica para manejar la búsqueda
    console.log('Búsqueda:', searchText);
  };

  const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    // Aquí puedes realizar acciones específicas cuando se cambia la pestaña
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderChatCrm />
      <View style={{ marginTop: 15 }} >
        {/* Asumiendo que CustomNavigationBar está definido en 'NavigationChatCRM.jsx' */}
        <CustomNavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
      {/* Resto del contenido de la pantalla */}
      <Text>Contenido de la pestaña {activeTab}</Text>
    </View>
  );
}

export default ChatScreen;
