
import React from 'react';
import {Dimensions, Image,StyleSheet,Text, View} from 'react-native';


import topo from '../../assets/topo.png'; 
import logofazenda from '../../assets/logo.png'
const width = Dimensions.get ('screen').width;



export default function Cesta () {
    /*<> Fragmento*/
    return <>
    
    <Image source ={topo} style ={estilos.topo} />
    <Text style={estilos.titulo}>Carinho de Compras</Text>
<View style={estilos.cesta}>
    
    <Text style={estilos.nome}>Cesta de Verduras</Text>

    <View syle={estilos.imagemFazenda}>
        <Image source={logofazenda} style={estilos.logofazenda}/>
    <Text style={estilos.nomeFazenda}>Jenny jack Farm</Text>
    </View>


    <Text style={estilos.descrição}>Uma cesta com produtos adicionados 
        cuidasamente da fazenda direto para sua
         cozinha</Text>
        <Text style={estilos.preço}>R$ 40,00</Text> 
   
</View>

    </>
}
/*estilação do layout*/
const estilos = StyleSheet.create({
    topo:{

        width:"100%",
        height:578 /768 * width,
    },
    titulo:{
        width:"100%",
        position: "absolute",
        textAlign:"center",
        fontSize:28,
        lineHeight:26,
        color: "white",
        fontWeight:"bold",
        padding:24,
    },
    /*espaço da lateral da tela*/
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    },

    /*estilo do cesta de verduras*/
    nome:{
        fontSize:26,
        lineHeight:46,
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
        lineHeigh:42,
        marginTop:8,
    }


});