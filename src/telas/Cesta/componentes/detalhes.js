import React from 'react';
import { Image,StyleSheet,Text, View} from 'react-native';

import Texto from '../componentes/texto';
import logofazenda from '../../../../assets/logo.png';

export default function Detalhes(){
<>
<Text style={estilos.nome}>Cesta de Verduras</Text>

<View syle={estilos.imagemFazenda}>
    <Image source={logofazenda} style={estilos.logofazenda}/>
<Text style={estilos.nomeFazenda}>Jenny jack Farm</Text>
</View>


<Texto style={estilos.descrição}>Uma cesta com produtos adicionados 
    cuidasamente da fazenda direto para sua
     cozinha</Texto>
    <Text style={estilos.preço}>R$ 40,00</Text> 

</>
}

const estilos = StyleSheet.create({

/*estilo do cesta de verduras*/
nome:{
    fontSize:26,
    lineHeight:42,
    color:"#464646",
    fontWeight:"bold",
    
},

imagemFazenda:{
    
    flexDirection:"row",
    paddingVertical:16,
    

    
},

logofazenda:{
    width:32,
    height:32,
    
},
nomeFazenda:{
    fontSize:16,
    lineHeight:26,
    marginLeft:12,
},

/*Estilo descrição*/
descrição:{
    color:"#A3A3A3",
    fontSize:16,
    lineHeight:26,
},
/*Estilo preço*/
preço:{
    color:"#2A9F85",
    fontWeight:"bold",
    fontSize:26,
    lineHeight:42,
    marginTop:8,
}


})