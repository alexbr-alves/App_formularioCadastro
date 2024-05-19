import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routeName } from './route_name';

import welcome from '../screens/welcome/welcome';
import registerCompanyinfo from '../screens/register/companyData/index';
import registerCompanyAddress from '../screens/register/companyAddress';
import createLogin from '../screens/register/companyLogin';
import homeLogged from '../screens/homeLogged';
import companyData from '../screens/companyData/index'
import employeeList from '../screens/employee/employeeList/index'
import employee_register from '../screens/employee/employeeRegister/index';

const Stack = createNativeStackNavigator();

export default function AppRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator initialRouteName={routeName.wellcome}>
       
          <Stack.Screen name={routeName.wellcome} component={welcome} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name={routeName.register_company_info} component={registerCompanyinfo} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name={routeName.register_company_address} component={registerCompanyAddress} options={{
            title: '',
            headerShown: false,
            }} />
          
          <Stack.Screen name={routeName.create_login} component={createLogin} options={{
            title: '',
            headerShown: false,
            }} />

          <Stack.Screen name={routeName.home_logged} component={homeLogged} options={{
            title: '',
            headerShown: false,
            }} />

            <Stack.Screen name={routeName.company_data} component={companyData} options={{
            title: '',
            headerShown: false,
            }} />

            <Stack.Screen name={routeName.employee_list} component={employeeList} options={{
            title: '',
            headerShown: false,
            }} />

            <Stack.Screen name={routeName.employee_register} component={employee_register} options={{
            title: '',
            headerShown: false,
            }} />
       
  
        </Stack.Navigator>
      </NavigationContainer>
    )
          
};


