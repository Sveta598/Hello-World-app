import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';
import Theme from './App/Theme/index';
import HomeStack from './App/Navigation/HomeStack';
import AccountsStack from './App/Navigation/AccountsStack';
import Giving from './App/Screens/Giving';
import Payments from './App/Screens/Payments';
import Cards from './App/Screens/Cards';
import {BlurView} from '@react-native-community/blur';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {
                borderTopColor: '#666666',
                backgroundColor: 'transparent',
              },
            }}
            tabBar={props => {
              return (
                <BlurView
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                  }}
                  blurType="light"
                  blurAmount={100}>
                  <BottomTabBar {...props} />
                </BlurView>
              );
            }}>
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                  <Image source={require('./App/Assets/Images/home.png')} />
                ),
              }}
            />
            <Tab.Screen
              name="Accounts"
              component={AccountsStack}
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
