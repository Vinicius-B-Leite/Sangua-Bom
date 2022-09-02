import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../../screens/home';
import CriarPublicacao from '../../../screens/post';



function RotasStacPost() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Post' component={CriarPublicacao} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>)
}

export default RotasStacPost;