import React from 'react';
import { View, TouchableOpacity, Button } from 'react-native';
import { Text } from 'react-native-elements';
import { Header } from '@react-navigation/elements';
import Avatar from './Avatar';

function Accounts({ navigation }) {
  return (
    <View>
      <Header
        headerTitle={() => (
          <Text h3 style={{color: '#fff', fontWeight: 'bold'}}>Accounts</Text>
        )}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
        headerTitleAlign="center"
        headerStyle={{backgroundColor: '#d73374'}}
        headerLeftContainerStyle={{ paddingLeft: 15 }}
        headerRightContainerStyle={{ paddingRight: 15 }}
      />
      <Button title="Go to Accounts" onPress={() => navigation.navigate('Accounts')} />
      <Button title="Go to Savings" onPress={() => navigation.navigate('Savings')} />
    </View>
  );
}

export default Accounts;