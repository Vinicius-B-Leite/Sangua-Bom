import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import PerguntasERespostas from '../screens/questions';
import Buscar from '../screens/search';
import Configuracoes from '../screens/config';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';   
import { FontAwesome } from '@expo/vector-icons';  
import Perfil from '../screens/profile';


const Tab = createBottomTabNavigator();


function Routes() {
    const iconInativo = '#e66b4c'
    const iconAtiva = '#f9220e'
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {backgroundColor: '#ffffff'},
                }}
                
            
            >


                <Tab.Screen name="Home" component={Home} options={{tabBarIcon: (color)=> <Entypo name="home" size={26} color={color.focused ? iconAtiva : iconInativo} />}}/>
                <Tab.Screen name="PerguntasERespostas" component={PerguntasERespostas}  options={{tabBarIcon: (color)=> <AntDesign name="questioncircle" size={22} color={iconInativo} />}}/>
                <Tab.Screen name="Procurar" component={Buscar} options={{tabBarIcon: (color)=><FontAwesome name="search" size={22} color={iconInativo} />}}/>
                <Tab.Screen name="Perfil" component={Perfil}  options={{tabBarIcon: (color)=> <AntDesign name="user" size={24} color={color.focused ? iconAtiva : iconInativo} />}}/>
            </Tab.Navigator>
        </NavigationContainer>  
    );
}

export default Routes;