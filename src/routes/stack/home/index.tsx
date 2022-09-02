import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../../screens/home';
import Configuracoes from '../../../screens/config';


function RotasStackHome() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Configuracoes' component={Configuracoes} />
        </Stack.Navigator>)
}

export default RotasStackHome;