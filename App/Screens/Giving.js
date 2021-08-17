import React from 'react';
import { Text } from 'react-native-elements';
import { View, Image, TouchableOpacity } from 'react-native';
import { Header } from '@react-navigation/elements';
import Avatar from './Avatar';

function Giving({ navigation }) {
  return (
    <View>
      <Header
        headerLeft={() => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
          >
            <Image source={require('../Assets/Images/back.png')}/>
          </TouchableOpacity>
        )}
        headerTitle={() => (
          <Text h3 style={{color: '#fff', fontWeight: 'bold'}}>Giving</Text>
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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text h2>Coming soon</Text>
      </View>
    </View>
  );
}

export default Giving;