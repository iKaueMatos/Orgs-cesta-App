import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta/componentes/index';
import mock from './src/mock/cesta'
import AppLoading from 'expo-splash-screen';
import { useFonts, Acme_400Regular} from '@expo-google-fonts/acme';


export default function App() {
  const [fontecarregada] = useFonts({
    "acmeregular":Acme_400Regular,
   });
   if (!fontecarregada){
    return (
    <View/>
    );
   }

  return (
    <View >
      <StatusBar/>
    <Cesta {...mock}/>
    </View>
  );
}

const styles = StyleSheet.create({
  
  });
