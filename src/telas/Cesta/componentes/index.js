
import React from 'react';
import {Dimensions, Image,StyleSheet,Text, View} from 'react-native';
/*importações de imagens e fontes e etc*/

import Topo from '../componentes/topo';
import Detalhes from '../componentes/detalhes';

/*fim*/


export default function Cesta ({topo,detalhes}) {
    /*<> Fragmento*/
    return <>
    <Topo {...Topo}/>
    <View style={estilos.cesta}>
    <Detalhes {...detalhes}/>

</View>

    </>
}
/*estização do layout*/
const estilos = StyleSheet.create({
    
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },

    

});