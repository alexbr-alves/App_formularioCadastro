import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { routeName } from './route_name';

import CompanyDataView from "../View/Company/CompanyDataView";
import RegisterCompanyAddress from "../View/Company/RegisterCompanyAddressView";
import RegisterCompanyData from "../View/Company/RegisterCompanyDataView";
import RegisterCompanylogin from "../View/Company/RegisterCompanyLoginView";
import ListEmployee from "../View/Employee/ListEmployeeView";
import RegisterEmployee from "../View/Employee/RegisterEmployeeView";
import HomeLogged from "../View/HomeLoggedView";
import ListProduct from "../View/Product/ListProductView";
import RegisterProduct from "../View/Product/RegisterProductView";
import ListSupplier from "../View/Supplier/ListSupplierView";
import RegisterSupplier from "../View/Supplier/RegisterSupplierView";
import WelcomeView from '../View/WellcomeView';


const Stack = createNativeStackNavigator();

export default function AppRotas() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={routeName.wellcome}>

        <Stack.Screen name={routeName.wellcome} component={WelcomeView} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.register_company_info} component={RegisterCompanyData} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.register_company_address} component={RegisterCompanyAddress} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.create_login} component={RegisterCompanylogin} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.home_logged} component={HomeLogged} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.company_data} component={CompanyDataView} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.employee_list} component={ListEmployee} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.employee_register} component={RegisterEmployee} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.supplier_list} component={ListSupplier} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.supplier_register} component={RegisterSupplier} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.product_list} component={ListProduct} options={{
          title: '',
          headerShown: false,
        }} />

        <Stack.Screen name={routeName.product_register} component={RegisterProduct} options={{
          title: '',
          headerShown: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )

};


