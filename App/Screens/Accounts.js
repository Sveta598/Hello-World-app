import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { Text } from 'react-native-elements';
import TabBar from './TabBar';

function Accounts({ navigation }) {
    return (
      <View>

        <View> 

        <TouchableHighlight
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Checking')}
        >
          
            <View style={{ flex: 2 }}>
              <Text h3>Checking</Text>
              <Text h4>Main account (...0353)</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text h2 style={{ flex: 2}}>$1,500</Text>
              <Text h3 style={{ flex: 1}}>.20</Text>
            </View>
          
        </TouchableHighlight>

        <TouchableHighlight
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Savings')}
        >
          
            <View style={{ flex: 2 }}>
              <Text h3>Savings</Text>
              <Text h4>Buy a house (...4044)</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text h2 style={{ flex: 2}}>$5,000</Text>
              <Text h3 style={{ flex: 1}}>.20</Text>
            </View>
          
        </TouchableHighlight>

        <TouchableHighlight
          style={{ flexDirection: 'row' }}
        >
          
            <View style={{ flex: 2 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text h3 style={{ flex: 2}}>Goodness</Text>
                <Image style={{ flex: 1}} source={require('../Assets/Images/heart.png')} />
              </View>
              <Text h4>Cash Rewards</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text h2 style={{ flex: 2}}>$500</Text>
              <Text h3 style={{ flex: 1}}>.40</Text>
            </View>
          
        </TouchableHighlight>

        </View> 
          
        <TabBar /> 

      </View>
    );
  }

  export default Accounts;