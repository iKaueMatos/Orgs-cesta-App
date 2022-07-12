import React from 'react';
import { Image,StyleSheet,Text, View,TouchableOpacity} from 'react-native';

import Texto from '../componentes/texto';


export default function Detalhes({nome, logoFazenda,nomeFazenda,descrição,preço,botao}){
return <>
<Text style={estilos.nome}>{nome}</Text>


<View syle={estilos.imagemFazenda}>
<Image source={logoFazenda} style={estilos.logofazenda}/>
<Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
</View>


<Texto style={estilos.descrição}>{descrição}</Texto>
     
    <Text style={estilos.preço}>{preço}</Text> 
    
<TouchableOpacity style={estilos.botao}>
    <Texto style={estilos.textoBotao}> {botao}</Texto>
   </TouchableOpacity>
</>
}

const estilos = StyleSheet.create({

/*estilo do cesta de verduras*/

cesta:{
    paddingVertical:8,
    paddingHorizontal:16,
},


nome:{
    fontSize:26,
    lineHeight:42,
    color:"#464646",
    fontWeight:"bold",
    
},

logofazenda:{
    
    flexDirection:"row",
    paddingVertical:16,
    
    

    
},

logofazenda:{
    width:22,
    height:22,
    
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
},
botao:{
    marginTop:16,
    backgroundColor:"#2a9f85",
    paddingVertical:16,
    borderRadius:6,
    
},

textoBotao:{
    
    textAlign:"center",
    color:"#FFF",
    fontSize:16,
    lineHeight:26,
    fontWeight:"bold",
},




})