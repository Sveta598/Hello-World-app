import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';
import Theme from './App/Theme/index';
import Tabs from './App/Navigation/Tabs';
import Checking from './App/Screens/Checking';
import Savings from './App/Screens/Savings';
import {StatusBar} from 'react-native';
import colors from './App/Theme/colors';
import {createStore} from 'redux';
import {rootReducer} from './App/Redux/Reducers/rootReducer';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './App/Redux/configureStore';
import thunk from 'redux-thunk';

const { store, persistor } = configureStore()

const reduxStore = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={reduxStore}>
       <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <ThemeProvider theme={Theme}>
            <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
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
      </PersistGate>
    </Provider>
  );
}

export default App;
