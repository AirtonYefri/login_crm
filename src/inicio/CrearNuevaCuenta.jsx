import React, { useState, useEffect  } from 'react';
import { View, Button, Text } from 'react-native';

function CrearNuevaCuenta() {


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* No necesitas un botón para abrir el modal automáticamente 
      <Button title="Abrir Modal" onPress={openModal} />
      */}
      <Text> HOLA MUNDO 1</Text>
    </View>
  );
}

export default CrearNuevaCuenta;