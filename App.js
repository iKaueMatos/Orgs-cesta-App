import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta/componentes/index';
import { useFonts, Acme_400Regular} from '@expo-google-fonts/acme';

export default function App() {
  const [fontecarregada] = useFonts({
    "acmeregular":Acme_400Regular,
   });
   if (!fontecarregada){
    return <View/>
   }

  return (
    <View style={styles.container}>
      <StatusBar/>
    <Cesta />
    </View>
  );
}

const styles = StyleSheet.create({
  
  });
