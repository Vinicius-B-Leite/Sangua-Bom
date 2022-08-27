import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { IPublicao } from '../../types/IPublicacao';
import { AntDesign } from '@expo/vector-icons';
import { Cartaz, ConteinerCardPublicacao, ConteinerInfo, ConteinerUsuario, NomeUsuario } from './styles';


function CardPublicacao({publi}: {publi: IPublicao}) {
    const tela = useWindowDimensions()
    return (
        <ConteinerCardPublicacao>
            <ConteinerUsuario>
                <AntDesign name="user" size={24} color="black" />
                <NomeUsuario>{publi.usuario}</NomeUsuario>
            </ConteinerUsuario>
            <Cartaz altura={tela.height / 2.5} source={{ uri: publi.cartaz }} />

            <ConteinerInfo>
                <Text>{publi.endereco}</Text>
                <Text>{publi.horario_aberto}</Text>
            </ConteinerInfo>
        </ConteinerCardPublicacao>
    );
}

export default CardPublicacao;