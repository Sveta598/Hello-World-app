import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import TabBar from './TabBar';

function Cards() {
    return (
      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text h2>Coming soon</Text>
        </View>
        <TabBar />
      </View>
    );
}

export default Cards;