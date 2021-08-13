import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { Text, TabView } from 'react-native-elements';

function TabBar({ navigation }) {
    return (
        <TabView>
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Home')}
          >
            <Image source={require('../Assets/Images/home.png')} />
          </TouchableHighlight>
          <Text h4 style={{ color: '#070207' }}>Home</Text>

          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Accounts')}
            >
            <Image source={require('../Assets/Images/accounts.png')} />
            <Text h4 style={{ color: '#070207' }}>Accounts</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Giving')}
          >
            <Image source={require('../Assets/Images/giving.png')} />
            <Text h4 style={{ color: '#070207' }}>Giving</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Payments')}
          >
            <Image source={require('../Assets/Images/payment.png')} />
            <Text h4 style={{ color: '#070207' }}>Payments</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Cards')}
          >
            <Image source={require('../Assets/Images/cards.png')} />
            <Text h4 style={{ color: '#070207' }}>Cards</Text>
          </TouchableHighlight>
          
        </TabView>
    );
  }

  export default TabBar;

