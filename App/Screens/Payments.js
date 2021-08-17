import React from 'react';
import {Text} from 'react-native-elements';
import {View, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import Avatar from './Avatar';
import HeaderTitle from '../Components/HeaderTitle';

function Payments() {
  return (
    <View>
      <Header
        headerTitle={() => <HeaderTitle title="Payments" />}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text h2>Coming soon</Text>
      </View>
    </View>
  );
}

export default Payments;
