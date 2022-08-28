import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PerguntasERespostas from '../screens/questions';
import Buscar from '../screens/search';
import RotasStack from './stack';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Perfil from '../screens/profile';
import CriarPublicacao from '../screens/post';
import BotaoNovaPublicacao from '../components/buttonPost';



const Tab = createBottomTabNavigator();


function Routes() {
    const iconInativo = '#000000'
    const iconAtiva = '#f9220e'
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: '#ffffff' },
                }}>

                <Tab.Screen name="Home2" component={RotasStack} options={{ tabBarIcon: (color) => <Entypo name="home" size={26} color={color.focused ? iconAtiva : iconInativo} /> }} />
                <Tab.Screen name="Procurar" component={Buscar} options={{ tabBarIcon: (color) => <FontAwesome name="search" size={22} color={color.focused ? iconAtiva : iconInativo} /> }} />
                <Tab.Screen name="Post" component={CriarPublicacao} options={{ tabBarIcon: (color) => <BotaoNovaPublicacao background={iconAtiva}/> }} />
                <Tab.Screen name="PerguntasERespostas" component={PerguntasERespostas} options={{ tabBarIcon: (color) => <AntDesign name="questioncircle" size={22} color={color.focused ? iconAtiva : iconInativo} /> }} />
                <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarIcon: (color) => <AntDesign name="user" size={24} color={color.focused ? iconAtiva : iconInativo} /> }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Routes;