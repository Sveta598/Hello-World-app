import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Home from '../Screens/Home';
import Checking from '../Screens/Checking';

const Stack = createNativeStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" 
      component={Home}
      options={{
        headerStyle: {
          backgroundColor: '#d73374',
        },
        headerLeft: () => (
          <TouchableOpacity>
            <Image source={require('../Assets/Images/burgerMenuIcon.png')}/>
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <Image 
          source={require('../Assets/Images/logo.png')}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image 
            source={require('../Assets/Images/oval.png')}/>
          </TouchableOpacity>
        )
      }}
    />
      <Stack.Screen name="Checking" 
      component={Checking}
      options={{
        headerStyle: {
          backgroundColor: '#d73374',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
          >
            <Image source={require('../Assets/Images/back.png')}/>
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Checking</Text>
            <Text style={{color: '#fff', fontSize: 0.5}}>Main account (...0353)</Text>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image 
            source={require('../Assets/Images/oval.png')}/>
          </TouchableOpacity>
        )
      }}
    />
    </Stack.Navigator>

  );
}

export default HomeStack;