import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accounts from '../Screens/Accounts';
import Savings from '../Screens/Savings';

const Stack = createNativeStackNavigator();
   
function AccountsStack() {
    return (

            <Stack.Navigator initialRouteName="Accounts">
              <Stack.Screen name="Accounts" component={Accounts} 
                options={{ 
                  title: 'Accounts', 
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }
                }}
              />
              <Stack.Screen name="Savings" component={Savings} 
                options={{ 
                  title: 'Savings', 
                  headerStyle: {
                    backgroundColor: '#51bbd9',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }
                }}
              />
            </Stack.Navigator>

    );
  }
  
  export default AccountsStack;