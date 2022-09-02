import  React from 'react';
import { TouchableOpacity } from 'react-native';
import {  Cancelar, Concluir, ConteinerHeader } from './styles';


interface Props{
    criarPublicacao: ()=>void,
    cancelar: ()=>void
}
function HeaderPost({criarPublicacao, cancelar}: Props) {
    return ( 
        <ConteinerHeader>
            <TouchableOpacity onPress={()=>cancelar}><Cancelar>cancelar</Cancelar></TouchableOpacity>
            <TouchableOpacity onPress={()=>criarPublicacao()}><Concluir>concluir</Concluir></TouchableOpacity>
        </ConteinerHeader>
     );
}

export default HeaderPost;