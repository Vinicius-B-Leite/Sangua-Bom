import * as React from 'react';
import {useNavigation} from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons';
import { BotaoConfig, ConteinerHeader, Logo } from "./styles";

import { RootStackParamsList } from '../../routes/params/stackparams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type HomeProps = NativeStackNavigationProp<RootStackParamsList, 'Home'>

function  Header() {
    const navegador = useNavigation<HomeProps>()
    
    return (
        <ConteinerHeader>
            <Logo>Sangue Bom</Logo>
            
            <BotaoConfig onPress={()=>navegador.navigate("Configuracoes")}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </BotaoConfig>
        </ConteinerHeader>
    );
}

export default Header;