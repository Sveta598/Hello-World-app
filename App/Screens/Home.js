import React from 'react';
import { View, TouchableHighlight, Image } from 'react-native';
import { Text } from 'react-native-elements';
import TabBar from './TabBar';

function Home({ navigation }) {
    return (
      <View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

          <View>
            <Text h4>Good Morning Danny | Jul 12, 2020</Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text h2>Accounts Overview</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text h1 style={{ flex: 1 }}>$7,000</Text><Text h2 style={{ flex: 1 }}>.80</Text>
            </View>
            <Text h4>Total Available cash</Text>
          </View>


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
  
          <View style={{ flexDirection: 'row' }}> 

            <Image 
              source={require('../Assets/Images/avatar.png')}
              style={{ flex: 1 }}
             />

            <View style={{ flex: 2 }}>

              <Text h3>Your Giving Impact</Text>

              <View style={{ flexDirection: 'row' }}>
                <Text h4 style={{ flex: 2 }}>St.Jude</Text>
                <Text h4 style={{ flex: 1, color: '#ce0b83' }}>-</Text> 
                <Text h4 style={{ flex: 2 }}>4 hrs ago</Text>
              </View>
              
            </View>

          </View>

          <Image source={require('../Assets/Images/rectangle2.png')} />

          <View>
            <Text h4>Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being</Text>
          </View>

        </View>

        <TabBar />

      </View>
    );
  }

  export default Home;