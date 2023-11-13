import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const MenuDropdown = ({ isVisible, options, onSelect }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity key={option} onPress={() => onSelect(option)}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuDropdown;
