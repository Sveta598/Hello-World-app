import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import SavedInput from './SavedInput';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import Theme from './App/Theme/index';
import Signin from './App/Screens/Signin';
import Home from './App/Screens/Home';
import Accounts from './App/Screens/Accounts';
import Giving from './App/Screens/Giving';
import Payments from './App/Screens/Payments';
import Cards from './App/Screens/Cards';
import Checking from './App/Screens/Checking';
import Savings from './App/Screens/Savings';

const Stack = createNativeStackNavigator();
 
 function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name="Signin" component={Signin} 
              options={{ 
                title: 'Signin', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
              },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

            <Stack.Screen name="Home" component={Home} 
              options={{ 
                title: 'Spiral', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />
            
            <Stack.Screen name="Accounts" component={Accounts} 
              options={{ 
                title: 'Accounts', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

            <Stack.Screen name="Giving" component={Giving} 
              options={{ 
                title: 'Giving', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

            <Stack.Screen name="Payments" component={Payments} 
              options={{ 
                title: 'Payments', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

            <Stack.Screen name="Cards" component={Cards} 
              options={{ 
                title: 'Cards', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

            <Stack.Screen name="Checking" component={Checking} 
              options={{ 
                title: 'Checking', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

            <Stack.Screen name="Savings" component={Savings} 
              options={{ 
                title: 'Savings', 
                headerStyle: {
                  backgroundColor: '#ce0b83',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'SFProRounded-Regular',
                }
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
