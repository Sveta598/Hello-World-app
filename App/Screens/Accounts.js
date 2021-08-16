import React from 'react';
import { View, Button } from 'react-native';

function Accounts({ navigation }) {
    return (
      <View>
        <Button title="Go to Accounts" onPress={() => navigation.navigate('Accounts')} />
        <Button title="Go to Savings" onPress={() => navigation.navigate('Savings')} />
      </View>
    );
  }

  export default Accounts;