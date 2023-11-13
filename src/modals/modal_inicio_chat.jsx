import React, { useState, useEffect  } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    // Abre el modal cuando el componente se monta
    setModalVisible(true);
    
  }, []);

  const closeModal = () => {
    setModalVisible(false);
  };

   // Manejar el retroceso manualmente
   const handleBack = () => {
    // Realiza alguna acción personalizada aquí
    // Puedes redirigir a otra pantalla, mostrar un mensaje, etc.
    console.log('Botón de retroceso personalizado presionado');
    // En este ejemplo, navegamos a la pantalla anterior
    navigation.goBack();
  };

  const modalHeader = (
    <View style={styles.modalHeader}>
      <Text style={styles.title}>Área</Text>
      <View style={styles.divider} />
    </View>
  );

  const handleModalBodyClick = () => {
    // Navega a la pantalla deseada aquí
    navigation.navigate('CrearNuevaCuenta'); // Reemplaza 'OtraPantalla' con la ruta de la pantalla a la que deseas navegar debe de colocar en App.js
  }; 

  const modalBody = (
    <View style={styles.modalBody}>
      <View style={styles.actionsContainer}>
      <View>
      <Text style={styles.bodyText}>Área de Ventas</Text>
      </View>
      <View style={styles.buttonIconContainer}>
        <Home style={styles.btn_color_modal} title="Ingresar" backgroundColor="rgba(81,86,190,.1)" onPress={closeModal} />
        </View>

      </View>
      <View style={styles.actionsContainer}>
      <View>
      <Text style={styles.bodyText}>Área de Ventas</Text>
      </View>
        <View >
            <Home style={styles.btn_color_modal} title="Ingresar" backgroundColor="rgba(81,86,190,.1)" onPress={handleModalBodyClick} />
        </View>

      </View>
      <View style={styles.actionsContainer}>
      <View>
      <Text style={styles.bodyText}>Área de Ventas</Text>
      </View>
        <View >
        <Home style={styles.btn_color_modal} title="Ingresar" backgroundColor="rgba(81,86,190,.1)" onPress={closeModal} />
        </View>

      </View>
    </View>
  );

  const modalFooter = (
    <View style={styles.modalFooter}>
      <View style={styles.divider} />
      <View style={styles.actionsContainer}>
        <Home title="No" backgroundColor="#db2828" onPress={closeModal} />
        <Home title="Yes" backgroundColor="#21ba45" onPress={() => console.log('Account deleted')} />
      </View>
    </View>
  );

  const modalContainer = (
    <View style={styles.modalContainer}>
      {modalHeader}
      {modalBody}
      {
      //modalFooter
    }
    </View>
  );

  const modal = (
    <Modal
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Seleccionar Área de Trabajo');
      }}
    >
      <View style={styles.modal}>
        {modalContainer}
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {modal}
    </View>
  );
}

const Home = ({ title, backgroundColor, onPress }) => (
  <TouchableOpacity style={{ ...styles.actions, backgroundColor }} onPress={onPress}>
    <Text style={styles.actionText}>{title}</Text>
    <Ionicons style={styles.actionText} name="checkmark-done-outline" size={25} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#00000099',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#f9fafb',
    width: '80%',
    borderRadius: 5,
  },
  modalHeader: {},
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    color: '#000',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
  },
  modalBody: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    
  },
  modalFooter: {},
  actions: {
    borderRadius: 15,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row', // Esto coloca el botón e ícono en la misma fila
    justifyContent: 'center', // Esto centra el contenido horizontalmente
    alignItems: 'center', // Esto centra el contenido verticalmente
  },
  actionText: {
    color: '#5156be',
  },
  actionsContainer: {
    flexDirection: 'row',
    margin: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,              // Ancho del borde (1 píxel)
    borderColor: '#ccc',      // Color del borde
    padding: 10,
    borderRadius: 10,
  },
  bodyText: {
    color: 'black',
    fontSize: 16,
  },
  btn_color_modal:{
    color: '#5156be', 
    backgroundColor: '#fff',
  },
  buttonIconContainer: {
    flexDirection: 'row', // Esto coloca el botón e ícono en la misma fila
    justifyContent: 'center', // Esto centra el contenido horizontalmente
    alignItems: 'center', // Esto centra el contenido verticalmente
    // ... Otros estilos para el contenedor del botón e ícono
  },
});
