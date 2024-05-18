import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRotas from './src/routes/AppRotas';

export default function App() {
  return (
    <>
      <AppRotas/>
      <StatusBar style="auto" />
    </>
  );
}

