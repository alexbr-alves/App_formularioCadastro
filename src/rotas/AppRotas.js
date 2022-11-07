import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../telas/welcome/welcome';
import Registrar from '../telas/registrar/registrar';
import FormularioPF from '../telas/registrar/componentes/FormularioPF';


const Stack = createNativeStackNavigator();
export default function AppRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator initialRouteName='Welcome'>
       
          <Stack.Screen name="Welcome" component={Welcome} options={{
            title: '',
            headerShown: false,
            }} />

            <Stack.Screen name="Registrar" component={Registrar} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name="FormularioPF" component={FormularioPF} options={{
            title: '',
            headerShown: false,
            }} />
       
  
        </Stack.Navigator>
      </NavigationContainer>
    )
          
}


