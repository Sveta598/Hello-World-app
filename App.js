import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';
import Theme from './App/Theme/index';
import Tabs from './App/Navigation/Tabs';
import Checking from './App/Screens/Checking';
import Savings from './App/Screens/Savings';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    StatusBar.setBackgroundColor('#d73374');
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen
              name="Checking"
              component={Checking}
              initialParams={{subtitle: 'Main account (...0353)'}}
            />
            <Stack.Screen
              name="Savings"
              component={Savings}
              initialParams={{subtitle: 'Buy a house (...4044)'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
