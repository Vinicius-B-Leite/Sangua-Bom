import * as React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BotaoNovo } from './styles';


interface Props  {
    background: string
}
function BotaoNovaPublicacao({background}: Props){
    return ( 
        <BotaoNovo background={background}>
            <Ionicons name="add-outline" size={30} color="white" />
        </BotaoNovo >
     );
}

export default BotaoNovaPublicacao;