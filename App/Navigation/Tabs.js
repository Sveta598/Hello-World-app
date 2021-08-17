import React from 'react';
import {Image, Platform} from 'react-native';
import Home from '../Screens/Home';
import Accounts from '../Screens/Accounts';
import Giving from '../Screens/Giving';
import Payments from '../Screens/Payments';
import Cards from '../Screens/Cards';
import {BlurView} from '@react-native-community/blur';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import colors from '../Theme/colors';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: '#666666',
          ...Platform.select({
            ios: {
              backgroundColor: 'transparent',
            },
            default: {
              backgroundColor: '#fff',
            },
          }),
        },
        tabBarActiveTintColor: colors.primary,
      }}
      tabBar={props => {
        return Platform.OS === 'ios' ? (
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
        ) : (
          <BottomTabBar {...props} />
        );
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require('../Assets/Images/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Accounts"
        component={Accounts}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: () => (
            <Image source={require('../Assets/Images/accounts.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Giving"
        component={Giving}
        options={{
          tabBarLabel: 'Giving',
          tabBarIcon: () => (
            <Image source={require('../Assets/Images/giving.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarLabel: 'Payments',
          tabBarIcon: () => (
            <Image source={require('../Assets/Images/payment.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarLabel: 'Cards',
          tabBarIcon: () => (
            <Image source={require('../Assets/Images/cards.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
