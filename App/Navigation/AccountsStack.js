import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Accounts from '../Screens/Accounts';
import Savings from '../Screens/Savings';

const Stack = createNativeStackNavigator();

function AccountsStack({ navigation }) {
    return (
            <Stack.Navigator initialRouteName="Accounts">
              <Stack.Screen name="Accounts" 
              component={Accounts} 
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
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>Accounts</Text>
                ),
                headerRight: () => (
                  <TouchableOpacity>
                    <Image 
                    source={require('../Assets/Images/oval.png')}/>
                  </TouchableOpacity>
                )
              }}
              />
              <Stack.Screen name="Savings" 
              component={Savings} 
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
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>Savings</Text>
                    <Text style={{color: '#fff', fontSize: 0.5}}>Buy a house (...4044)</Text>
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
  
  export default AccountsStack;