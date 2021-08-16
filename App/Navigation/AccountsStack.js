import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, TouchableHighlight, Image } from 'react-native';

import { Text } from 'react-native-elements';
import Accounts from '../Screens/Accounts';
import Savings from '../Screens/Savings';

const Stack = createNativeStackNavigator();

function AccountsTitle({ navigation }) {
  console.log(navigation)
  return (
    <View 
      style={{ flexDirection: 'row',  
       padding: 2, marginLeft: -8,
      backgroundColor: '#ce0b83'}}>
        <TouchableHighlight style={{justifyContent: 'center', 
        alignItems: 'center'}}
        onPress={() => navigation.navigate('Home')}>
         <Image 
          source={require('../Assets/Images/back.png')}
          style={{flex: 1, color: '#000', width: 38, height: 38, 
          marginLeft: 15, marginTop: 15, marginBottom: 15}} />
        </TouchableHighlight>
          <View style={{ flexDirection: 'row', 
          justifyContent: 'center', alignItems: 'center', flex: 4}}>
            <Text h3 style={{ color: '#fff'}}>Accounts</Text>
          </View>
          <Image 
          source={require('../Assets/Images/oval.png')}
          style={{flex: 1, width: 70, height: 70, 
          marginRight: 15, marginBottom: 10}} />
    </View>
  );
}

function AccountsStack() {
    return (
            <Stack.Navigator initialRouteName="Accounts">
              <Stack.Screen name="Accounts" component={Accounts} 
                options={{
                  headerTitle: props => <AccountsTitle {...props} />
                }}

              />
              <Stack.Screen name="Savings" component={Savings} 
                options={{ 
                  title: 'Savings', 
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
  
  export default AccountsStack;