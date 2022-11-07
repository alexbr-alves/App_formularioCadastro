import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return (
    <>
      <AppRotas/>
      <StatusBar style="auto" />
    </>
  );
}

