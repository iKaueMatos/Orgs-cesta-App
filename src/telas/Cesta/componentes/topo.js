import React from 'react';
import {Dimensions, Image,StyleSheet,Text, View} from 'react-native';

import Topo from '../../../../assets/topo.png'; 

const width = Dimensions.get ('screen').width;

export default function topo({titulo}){
    return <>
    <Image source ={Topo} style ={estilos.topo} />
    <Text style={estilos.titulo}>{titulo}</Text>
    </>
}

const estilos =StyleSheet.create({

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
        padding:26,
        fontWeight:"bold",
    },
    /*espaço da lateral da tela*/


});