import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import Theme from './App/Theme/index';
//import Home from './App/Screens/Home';
//import Accounts from './App/Screens/Accounts';
import Giving from './App/Screens/Giving';
import Payments from './App/Screens/Payments';
import Cards from './App/Screens/Cards';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen 
              name="Home" 
              component={Home} 
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Image source={require('./App/Assets/Images/home.png')} />
                ),
              }}
            />
            <Tab.Screen 
              name="Accounts" 
              component={Accounts} 
              options={{
                tabBarLabel: 'Accounts',
                tabBarIcon: () => (
                    <Image source={require('./App/Assets/Images/accounts.png')} />
                ),
              }}
            />
            <Tab.Screen 
              name="Giving" 
              component={Giving} 
              options={{
                tabBarLabel: 'Giving',
                tabBarIcon: () => (
                    <Image source={require('./App/Assets/Images/giving.png')} />
                ),
              }}
            />
            <Tab.Screen 
              name="Payments" 
              component={Payments} 
              options={{
                tabBarLabel: 'Payments',
                tabBarIcon: () => (
                    <Image source={require('./App/Assets/Images/payment.png')} />
                ),
              }}
            />
            <Tab.Screen 
              name="Cards" 
              component={Cards} 
              options={{
                tabBarLabel: 'Cards',
                tabBarIcon: () => (
                    <Image source={require('./App/Assets/Images/cards.png')} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
 
export default App;
