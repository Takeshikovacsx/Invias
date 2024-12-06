import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable'; // Importamos para usar animaciones

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
    } else {
      Alert.alert("Bienvenido", `Inicio de sesión exitoso para ${email}`);
    }
  };

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <View style={styles.loginBox}>
        <Animatable.Text style={styles.title} animation="fadeInDown" duration={1000}>
          ¡Bienvenido!
        </Animatable.Text>
        
        <Animatable.Text style={styles.subtitle} animation="fadeInDown" duration={1200}>
          Por favor inicia sesión para continuar
        </Animatable.Text>

        <Animatable.View style={styles.inputContainer} animation="fadeInUp" duration={1300}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#bbb"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
        </Animatable.View>

        <Animatable.View style={styles.inputContainer} animation="fadeInUp" duration={1400}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#bbb"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1500}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </Animatable.View>

        <TouchableOpacity>
          <Animatable.Text style={styles.forgotPassword} animation="bounceInUp" duration={1600}>
            ¿Olvidaste tu contraseña?
          </Animatable.Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#192f6a',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#ccc',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
