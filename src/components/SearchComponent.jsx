import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../style/styles.jsx'; 

function SearchComponent({ searchVisible, setSearchVisible, searchText, setSearchText }) {
    const textInputRef = useRef(null);

    const handleSearch = () => {
        // Aquí puedes agregar la lógica para manejar la búsqueda
        console.log('Búsqueda:', searchText);
      };

  return (
    <View style={[styles.searchBox, searchVisible ? { display: 'flex' } : { display: 'none' }]}>
    <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} onPress={handleSearch} />
      <TextInput
       ref={textInputRef}
        style={[styles.textinput, searchVisible ? { display: 'flex' } : { display: 'none' }]}
        placeholder="Buscar"
        value={searchText}
        onChangeText={setSearchText}
        autoFocus={searchVisible}
        onFocus={() => {
            // Realiza acciones al enfocar el campo de búsqueda (opcional)
          }}
          onBlur={() => {
            // Realiza acciones al quitar el enfoque del campo de búsqueda (opcional)
          }}
      />
     
    </View>
  );
}

export default SearchComponent;
