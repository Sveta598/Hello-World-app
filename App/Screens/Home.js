import React from 'react';
import { View, Button, Image, TouchableOpacity } from 'react-native';
import { Header } from '@react-navigation/elements';
import Avatar from './Avatar';

function Home({ navigation }) {
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
        headerTitleAlign="center"
        headerStyle={{backgroundColor: '#d73374'}}
        headerLeftContainerStyle={{ paddingLeft: 15 }}
        headerRightContainerStyle={{ paddingRight: 15 }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Checking" onPress={() => navigation.navigate('Checking')} />
    </View>
  );
}

export default Home;