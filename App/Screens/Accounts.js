import React from 'react';
import {View, TouchableOpacity, Button} from 'react-native';
import {Text} from 'react-native-elements';
import Avatar from './Avatar';
import Header from '../Components/Header';
import HeaderTitle from '../Components/HeaderTitle';

function Accounts({navigation}) {
  return (
    <View>
      <Header
        headerTitle={() => <HeaderTitle title="Accounts" />}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to Accounts"
        onPress={() => navigation.navigate('Accounts')}
      />
      <Button
        title="Go to Savings"
        onPress={() => navigation.navigate('Savings')}
      />
    </View>
  );
}

export default Accounts;
