import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';

function Home() {
    return (
      
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

    );
  }

  export default Home;