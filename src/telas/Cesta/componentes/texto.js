import React from 'react';
import { Text,StyleSheet } from 'react-native';

export default function Texto({children,style}){
    return <Text style={estilos.Texto}>{children}</Text>
}

const estilos = StyleSheet.create({
    Texto:{
        fontFamily:"acmeregular",
    }
})