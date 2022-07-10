import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/cesta';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
    <Cesta />
    </View>
  );
}

const styles = StyleSheet.create({
  
  });
