import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../telas/welcome/welcome';
import Registrar from '../telas/registrar/registrar';
import DadosPessoaisPF from '../telas/registrar/FormularioPF/dadosPessoaisPF/index';
import EnderecoPF from '../telas/registrar/FormularioPF/enderecoPF/index';
import LoginPF from '../telas/registrar/FormularioPF/LoginPF';

import DadosPessoaisPJ from '../telas/registrar/FormularioPJ/dadosPessoaisPJ/index';
import EnderecoPJ from '../telas/registrar/FormularioPJ/enderecoPJ/index';
import LoginPJ from '../telas/registrar/FormularioPJ/LoginPJ';
import Home from '../telas/Home';

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

          <Stack.Screen name="DadosPessoaisPF" component={DadosPessoaisPF} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name="EnderecoPF" component={EnderecoPF} options={{
            title: '',
            headerShown: false,
            }} />
          
          <Stack.Screen name="LoginPF" component={LoginPF} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name="DadosPessoaisPJ" component={DadosPessoaisPJ} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name="EnderecoPJ" component={EnderecoPJ} options={{
            title: '',
            headerShown: false,
            }} />
          
          <Stack.Screen name="LoginPJ" component={LoginPJ} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name="Home" component={Home} options={{
            title: '',
            headerShown: false,
            }} />
       
  
        </Stack.Navigator>
      </NavigationContainer>
    )
          
};


