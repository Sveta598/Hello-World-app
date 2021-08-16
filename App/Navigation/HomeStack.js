import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image } from 'react-native';
import Home from '../Screens/Home';
import Checking from '../Screens/Checking';

const Stack = createNativeStackNavigator();

function HomeTitle() {
  return (
    <View 
      style={{ flexDirection: 'row',  
       padding: 2, marginLeft: -8,
       backgroundColor: '#ce0b83'}}>
         <Image 
          source={require('../Assets/Images/burgerMenuIcon.png')}
          style={{flex: 1, color: '#000', 
          width: 55, height: 55,
          marginLeft: 5,  marginTop: 10,  marginBottom: 5}} />
          <View style={{ flexDirection: 'row', flex: 4}}>
            <Image 
            source={require('../Assets/Images/logo.png')}
            style={{flex: 1, color: '#e777d5', 
            width: 38, height: 38,
            marginTop: 15 }} />
          </View>
          <Image 
          source={require('../Assets/Images/oval.png')}
          style={{flex: 1, width: 70, height: 70, 
          marginRight: 15, marginBottom: 10}} />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
        options={{
          headerTitle: props => <HomeTitle {...props} />
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