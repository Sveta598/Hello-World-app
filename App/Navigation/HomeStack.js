import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Checking from '../Screens/Checking';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (

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

  );
}

export default HomeStack;