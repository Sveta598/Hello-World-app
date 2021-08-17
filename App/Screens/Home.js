import React from 'react';
import {View, Button, Image, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import Header from '../Components/Header';

function Home({navigation}) {
  return (
    <View>
      <Header
        headerLeft={() => (
          <TouchableOpacity>
            <Image source={require('../Assets/Images/burgerMenuIcon.png')} />
          </TouchableOpacity>
        )}
        headerTitle={() => (
          <Image source={require('../Assets/Images/logo.png')} />
        )}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Checking"
        onPress={() => navigation.navigate('Checking')}
      />
    </View>
  );
}

export default Home;
