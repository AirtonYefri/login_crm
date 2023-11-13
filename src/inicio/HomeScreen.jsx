import React, { useState, useEffect  } from 'react';
import { View, Button, Text } from 'react-native';
import CustomModal from '../modals/modal_inicio_chat.jsx'; // Asegúrate de que la ruta sea correcta

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Abre el modal cuando el componente se monta
    setModalVisible(true);
  }, []);

 /*
 const openModal = () => {
    setModalVisible(true);
  };
 */ 

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* No necesitas un botón para abrir el modal automáticamente 
      <Button title="Abrir Modal" onPress={openModal} />
      */}
      <Text> HOLA MUNDO</Text>
      <CustomModal visible={modalVisible} closeModal={closeModal} />
    </View>
  );
}

export default App;
