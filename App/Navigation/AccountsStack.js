import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import Theme from '../Theme/index';
import Accounts from '../Screens/Accounts';
import Savings from '../Screens/Savings';

const Stack = createNativeStackNavigator();
   
function AccountsStack() {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
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
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
  
  export default AccountsStack;