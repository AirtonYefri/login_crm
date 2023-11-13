import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../style/styles.jsx'; 

const CustomNavigationBar = ({ activeTab, onTabPress }) => {
  const tabs = [
    { id: 0, label: 'Todos' },
    { id: 1, label: 'Sin responder' },
    { id: 2, label: 'Grupos' },
  ];

  return (
    <View style={styles.navigationBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
        key={tab.id}
        style={[
          styles.tab,
          activeTab === tab.id ? styles.activeTab : null,
        ]}
        onPress={() => onTabPress(tab.id)}
        >
          <Text style={[styles.tabLabel, activeTab === tab.id ? styles.activeTabLabel : null]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomNavigationBar;
