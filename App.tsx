import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from './views/LoginScreen.js';
import MapboxScreen from './views/MapboxScreen.js'; // Asegúrate de que la ruta es correcta

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapboxScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Color de fondo general de la app
  },
});

export default App;