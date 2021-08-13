import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import Theme from './App/Theme/index';
import Home from '../Screens/Home';
import Checking from '../Screens/Checking';

const Stack = createNativeStackNavigator();
   
function HomeStack() {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} 
                options={{ 
                  title: 'Home', 
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }
                }}
              />
              <Stack.Screen name="Checking" component={Checking} 
                options={{ 
                  title: 'Checking', 
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
  
  export default HomeStack;