import  React from 'react';
import { TouchableOpacity } from 'react-native';
import {  Cancelar, Concluir, ConteinerHeader } from './styles';


interface Props{
    criarPublicacao: ()=>void,
}
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PostStackParamsList } from '../../routes/params/stackparams';
type PostProps = NativeStackNavigationProp<PostStackParamsList, 'Post'>


function HeaderPost({criarPublicacao}: Props) {
    const navigator =  useNavigation<PostProps>()


    const cancelar = () => {
        navigator.navigate("Home")
    }
    return ( 
        <ConteinerHeader>
            <TouchableOpacity onPress={()=>cancelar()}><Cancelar>cancelar</Cancelar></TouchableOpacity>
            <TouchableOpacity onPress={()=>criarPublicacao()}><Concluir>concluir</Concluir></TouchableOpacity>
        </ConteinerHeader>
     );
}

export default HeaderPost;